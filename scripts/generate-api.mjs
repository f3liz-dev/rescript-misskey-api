#!/usr/bin/env node
// Generate type-safe Misskey API client from OpenAPI spec with Cherrypick support
// This replaces the manual misskey-js bindings with auto-generated code
// Supports both Misskey and Cherrypick (fork) with shared base + extensions
//
// Output structure:
//   generated/                 - Shared endpoints (work with both Misskey and Cherrypick)
//   generated/Cherrypick/      - Cherrypick-specific extensions (additional + modified endpoints)
//   generated/*-diff.md        - Detailed API differences report
//   generated/*-merge.md       - Merge statistics

import { generate } from '@f3liz/rescript-autogen-openapi';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log('📦 Generating Misskey API client with Cherrypick support\n');
  console.log('🌳 Multi-fork code generation with modular output\n');
  
  // Create output directory
  const outputDir = join(__dirname, '../src/generated');
  mkdirSync(outputDir, { recursive: true });
  
  console.log('📡 Fetching API specs...');
  console.log('   • Misskey.io (base) - https://misskey.io/api.json');
  console.log('   • Kokonect.link (Cherrypick fork) - https://kokonect.link/api.json');
  console.log('⏳ This may take a moment (parsing 400+ endpoints)...\n');
  
  // Generate from OpenAPI spec with multi-fork support
  const result = await generate({
    specPath: 'https://misskey.io/api.json',
    outputDir,
    strategy: 'SharedBase',         // Extract shared code + fork extensions
    modulePerTag: true,              // Generate one module per API tag
    generateDiffReport: true,        // Generate diff reports for fork differences
    breakingChangeHandling: 'Warn',
    includeTags: undefined,          // Include all tags
    excludeTags: undefined,          // Don't exclude any

    baseInstanceName: 'misskey-io',   // Subdirectory name for base instance
    baseModulePrefix: 'MisskeyIo',   // Module prefix for base instance

    targets: {
      rescriptApi: true,        // ✅ Base ReScript API
      rescriptWrapper: true,    // ✅ NEW: Pipe-first wrapper
      typescriptDts: true,      // ✅ NEW: TypeScript definitions
      typescriptWrapper: true,  // ✅ NEW: TypeScript wrapper
    },
    
    // Fork configuration - Cherrypick from kokonect.link
    forkSpecs: [
      {
        name: 'kokonect-link',
        specPath: 'https://kokonect.link/api.json',
      },
      // You can add more forks here:
      // {
      //   name: 'firefish',
      //   specPath: 'https://firefish.example/api.json',
      // },
    ],
  });
  
  if (result.TAG === 'Ok') {
    const { generatedFiles } = result._0;
    
    console.log('✅ Multi-fork code generation complete!\n');
    console.log(`📁 Generated ${generatedFiles.length} files\n`);
    
    console.log('📂 Output structure:');
    console.log('   generated/misskey-io/        - Base Misskey.io API (252 endpoints)');
    console.log('   generated/kokonect-link/     - Cherrypick/Kokonect.link API (239 endpoints)');
    console.log('   generated/*.md               - Diff and merge reports\n');
    
    console.log('💡 Generated code:');
    console.log('   • One file per API tag (Admin.res, Notes.res, etc.)');
    console.log('   • ReScript type definitions for all schemas');
    console.log('   • Sury validation schemas with runtime type checking');
    console.log('   • Type-safe endpoint functions\n');
    
    console.log('📊 Multi-fork benefits:');
    console.log('   ✨ Modular structure - one file per tag');
    console.log('   🔧 Easy maintenance - shared code in base, extensions in subdirectory');
    console.log('   🚀 Full type safety for both Misskey and Cherrypick');
    console.log('   📦 Bundle optimization with tree-shaking\n');
    
    console.log('📋 Reports:');
    console.log('   • kokonect-link-diff.md - API differences between Misskey.io and Kokonect.link');
    console.log('   • kokonect-link-merge.md - Merge statistics\n');
    
    console.log('🚀 Usage:');
    console.log('   // Access Misskey.io API:');
    console.log('   MisskeyIoGenerated.MisskeyIoGenerated.Notes.postNotesCreate');
    console.log('   ');
    console.log('   // Access Cherrypick/Kokonect.link API:');
    console.log('   KokonectLinkGenerated.KokonectLinkGenerated.Notes.postNotesCreate');
    console.log('   ');
    console.log('   // Or use wrappers:');
    console.log('   Cherrypick.Notes.postNotesCreate  // Cleaner syntax\n');
    
  } else {
    console.error('❌ Generation failed:', result._0);
    process.exit(1);
  }
}

main().catch(err => {
  console.error('💥 Error:', err);
  process.exit(1);
});
