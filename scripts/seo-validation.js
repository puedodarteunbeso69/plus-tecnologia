#!/usr/bin/env node

/**
 * SEO Validation Script for PLUS TECNOLOGIA
 *
 * This script validates SEO configuration and runs automated tests
 * Usage: node scripts/seo-validation.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://plustecnologia.com';
const TIMEOUT = 10000; // 10 seconds

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Request timeout'));
    }, TIMEOUT);

    https.get(url, (res) => {
      clearTimeout(timeout);
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

async function validateSitemap() {
  log('\n📄 Validating Sitemap...', 'blue');

  try {
    const response = await makeRequest(`${BASE_URL}/sitemap.xml`);

    if (response.statusCode === 200) {
      const isXML = response.headers['content-type']?.includes('xml');
      const hasUrlset = response.body.includes('<urlset');

      if (isXML && hasUrlset) {
        log('✅ Main sitemap is valid and accessible', 'green');

        // Count URLs in sitemap
        const urlMatches = response.body.match(/<url>/g);
        const urlCount = urlMatches ? urlMatches.length : 0;
        log(`   📊 Found ${urlCount} URLs in sitemap`, 'cyan');

        return { status: 'success', urlCount };
      } else {
        log('⚠️  Sitemap exists but format may be incorrect', 'yellow');
        return { status: 'warning', message: 'Invalid XML format' };
      }
    } else {
      log(`❌ Sitemap not accessible (Status: ${response.statusCode})`, 'red');
      return { status: 'error', statusCode: response.statusCode };
    }
  } catch (error) {
    log(`❌ Error accessing sitemap: ${error.message}`, 'red');
    return { status: 'error', error: error.message };
  }
}

async function validateRobots() {
  log('\n🤖 Validating Robots.txt...', 'blue');

  try {
    const response = await makeRequest(`${BASE_URL}/robots.txt`);

    if (response.statusCode === 200) {
      const hasSitemap = response.body.includes('Sitemap:');
      const hasUserAgent = response.body.includes('User-agent:');

      if (hasSitemap && hasUserAgent) {
        log('✅ Robots.txt is properly configured', 'green');
        return { status: 'success' };
      } else {
        log('⚠️  Robots.txt exists but may be incomplete', 'yellow');
        return { status: 'warning', message: 'Missing required directives' };
      }
    } else {
      log(`❌ Robots.txt not accessible (Status: ${response.statusCode})`, 'red');
      return { status: 'error', statusCode: response.statusCode };
    }
  } catch (error) {
    log(`❌ Error accessing robots.txt: ${error.message}`, 'red');
    return { status: 'error', error: error.message };
  }
}

async function validateStructuredData() {
  log('\n🏷️  Validating Structured Data...', 'blue');

  try {
    const response = await makeRequest(BASE_URL);

    if (response.statusCode === 200) {
      const hasJsonLd = response.body.includes('application/ld+json');
      const hasOrganization = response.body.includes('"@type":"Organization"');
      const hasWebsite = response.body.includes('"@type":"Website"');

      let schemaCount = 0;
      const jsonLdMatches = response.body.match(/application\/ld\+json/g);
      if (jsonLdMatches) {
        schemaCount = jsonLdMatches.length;
      }

      if (hasJsonLd) {
        log(`✅ Structured data found (${schemaCount} schemas)`, 'green');

        if (hasOrganization) {
          log('   📊 Organization schema: ✅', 'cyan');
        }
        if (hasWebsite) {
          log('   📊 Website schema: ✅', 'cyan');
        }

        return { status: 'success', schemaCount };
      } else {
        log('❌ No structured data found', 'red');
        return { status: 'error', message: 'No JSON-LD detected' };
      }
    } else {
      log(`❌ Cannot access homepage (Status: ${response.statusCode})`, 'red');
      return { status: 'error', statusCode: response.statusCode };
    }
  } catch (error) {
    log(`❌ Error validating structured data: ${error.message}`, 'red');
    return { status: 'error', error: error.message };
  }
}

async function validateMetaTags() {
  log('\n🏷️  Validating Meta Tags...', 'blue');

  try {
    const response = await makeRequest(BASE_URL);

    if (response.statusCode === 200) {
      const hasTitle = response.body.includes('<title>') && !response.body.includes('<title></title>');
      const hasDescription = response.body.includes('name="description"');
      const hasOG = response.body.includes('property="og:');
      const hasTwitter = response.body.includes('name="twitter:');
      const hasCanonical = response.body.includes('rel="canonical"');

      let score = 0;
      const checks = [
        { name: 'Title tag', passed: hasTitle },
        { name: 'Meta description', passed: hasDescription },
        { name: 'OpenGraph tags', passed: hasOG },
        { name: 'Twitter Cards', passed: hasTwitter },
        { name: 'Canonical URL', passed: hasCanonical }
      ];

      checks.forEach(check => {
        if (check.passed) {
          log(`   ✅ ${check.name}`, 'green');
          score++;
        } else {
          log(`   ❌ ${check.name}`, 'red');
        }
      });

      const percentage = Math.round((score / checks.length) * 100);
      log(`   📊 Meta tags score: ${score}/${checks.length} (${percentage}%)`, 'cyan');

      return {
        status: percentage >= 80 ? 'success' : 'warning',
        score: percentage,
        details: checks
      };
    } else {
      log(`❌ Cannot access homepage (Status: ${response.statusCode})`, 'red');
      return { status: 'error', statusCode: response.statusCode };
    }
  } catch (error) {
    log(`❌ Error validating meta tags: ${error.message}`, 'red');
    return { status: 'error', error: error.message };
  }
}

async function validateImageSitemap() {
  log('\n🖼️  Validating Image Sitemap...', 'blue');

  try {
    const response = await makeRequest(`${BASE_URL}/sitemap-images.xml`);

    if (response.statusCode === 200) {
      const hasImageNamespace = response.body.includes('xmlns:image=');
      const hasImageTags = response.body.includes('<image:image>');

      if (hasImageNamespace && hasImageTags) {
        const imageMatches = response.body.match(/<image:image>/g);
        const imageCount = imageMatches ? imageMatches.length : 0;

        log(`✅ Image sitemap is valid with ${imageCount} images`, 'green');
        return { status: 'success', imageCount };
      } else {
        log('⚠️  Image sitemap exists but format may be incorrect', 'yellow');
        return { status: 'warning', message: 'Invalid image sitemap format' };
      }
    } else {
      log(`❌ Image sitemap not accessible (Status: ${response.statusCode})`, 'red');
      return { status: 'error', statusCode: response.statusCode };
    }
  } catch (error) {
    log(`❌ Error accessing image sitemap: ${error.message}`, 'red');
    return { status: 'error', error: error.message };
  }
}

async function validateManifest() {
  log('\n📱 Validating Web Manifest...', 'blue');

  try {
    const response = await makeRequest(`${BASE_URL}/manifest.json`);

    if (response.statusCode === 200) {
      try {
        const manifest = JSON.parse(response.body);
        const requiredFields = ['name', 'short_name', 'start_url', 'display', 'theme_color'];
        const missingFields = requiredFields.filter(field => !manifest[field]);

        if (missingFields.length === 0) {
          log('✅ Web manifest is valid and complete', 'green');
          log(`   📊 App name: ${manifest.name}`, 'cyan');
          log(`   📊 Icons: ${manifest.icons?.length || 0}`, 'cyan');
          return { status: 'success', manifest };
        } else {
          log(`⚠️  Web manifest missing fields: ${missingFields.join(', ')}`, 'yellow');
          return { status: 'warning', missingFields };
        }
      } catch (parseError) {
        log('❌ Web manifest is not valid JSON', 'red');
        return { status: 'error', message: 'Invalid JSON' };
      }
    } else {
      log(`❌ Web manifest not accessible (Status: ${response.statusCode})`, 'red');
      return { status: 'error', statusCode: response.statusCode };
    }
  } catch (error) {
    log(`❌ Error accessing web manifest: ${error.message}`, 'red');
    return { status: 'error', error: error.message };
  }
}

async function generateReport(results) {
  log('\n📊 Generating SEO Report...', 'blue');

  const timestamp = new Date().toISOString();
  const reportData = {
    timestamp,
    site: BASE_URL,
    results,
    summary: {
      total: Object.keys(results).length,
      passed: Object.values(results).filter(r => r.status === 'success').length,
      warnings: Object.values(results).filter(r => r.status === 'warning').length,
      errors: Object.values(results).filter(r => r.status === 'error').length
    }
  };

  // Create reports directory if it doesn't exist
  const reportsDir = path.join(__dirname, '..', 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  // Save detailed JSON report
  const reportPath = path.join(reportsDir, `seo-report-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));

  log(`\n📄 Report saved to: ${reportPath}`, 'cyan');

  return reportData;
}

async function main() {
  log(`${colors.bold}${colors.cyan}🔍 SEO Validation Tool for PLUS TECNOLOGIA${colors.reset}`);
  log(`${colors.cyan}Testing site: ${BASE_URL}${colors.reset}\n`);

  const results = {};

  // Run all validations
  results.sitemap = await validateSitemap();
  results.robots = await validateRobots();
  results.structuredData = await validateStructuredData();
  results.metaTags = await validateMetaTags();
  results.imageSitemap = await validateImageSitemap();
  results.manifest = await validateManifest();

  // Generate report
  const report = await generateReport(results);

  // Summary
  log(`\n${colors.bold}${colors.cyan}📊 SUMMARY${colors.reset}`);
  log(`✅ Passed: ${report.summary.passed}`, 'green');
  log(`⚠️  Warnings: ${report.summary.warnings}`, 'yellow');
  log(`❌ Errors: ${report.summary.errors}`, 'red');

  const score = Math.round((report.summary.passed / report.summary.total) * 100);
  log(`\n🎯 Overall SEO Score: ${score}%`, score >= 80 ? 'green' : score >= 60 ? 'yellow' : 'red');

  if (score >= 80) {
    log('\n🎉 Excellent! Your SEO configuration is solid.', 'green');
  } else if (score >= 60) {
    log('\n⚠️  Good start, but there are areas for improvement.', 'yellow');
  } else {
    log('\n🚨 SEO configuration needs attention. Please address the errors above.', 'red');
  }

  log(`\n🔗 For detailed analysis, visit: ${BASE_URL}/admin/seo`, 'cyan');
  log(`📋 Setup instructions: See GOOGLE_SEARCH_CONSOLE_SETUP.md\n`, 'cyan');

  // Exit with appropriate code
  process.exit(report.summary.errors > 0 ? 1 : 0);
}

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  log(`❌ Unhandled Rejection at: ${promise}, reason: ${reason}`, 'red');
  process.exit(1);
});

// Run the validation
if (require.main === module) {
  main();
}

module.exports = {
  validateSitemap,
  validateRobots,
  validateStructuredData,
  validateMetaTags,
  validateImageSitemap,
  validateManifest
};
