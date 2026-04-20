<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:html="http://www.w3.org/TR/REC-html40">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap — BookMelbourneTaxi.com</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="robots" content="noindex,follow"/>
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; color: #333; margin: 0; padding: 0; background: #f7f8fa; }
          .container { max-width: 1100px; margin: 0 auto; padding: 30px 20px; }
          h1 { font-size: 22px; margin: 0 0 6px; color: #0f172a; }
          .subtitle { color: #64748b; font-size: 13px; margin-bottom: 22px; }
          .info { background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px 18px; margin-bottom: 18px; font-size: 13px; color: #475569; }
          table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden; }
          th { background: #1e293b; color: #fff; text-align: left; padding: 10px 14px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; }
          td { padding: 10px 14px; border-top: 1px solid #e2e8f0; font-size: 13px; }
          tr:nth-child(even) td { background: #f8fafc; }
          tr:hover td { background: #eef2ff; }
          a { color: #2563eb; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .footer { margin-top: 18px; font-size: 12px; color: #94a3b8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p class="subtitle">Generated for BookMelbourneTaxi.com — helps search engines crawl &amp; index every page.</p>

          <xsl:if test="sitemap:sitemapindex">
            <div class="info">
              This is a <strong>sitemap index</strong> containing <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> sitemaps.
            </div>
            <table>
              <tr><th>#</th><th>Sitemap URL</th><th>Last Modified</th></tr>
              <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </table>
          </xsl:if>

          <xsl:if test="sitemap:urlset">
            <div class="info">
              This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.
            </div>
            <table>
              <tr><th>#</th><th>URL</th><th>Last Modified</th><th>Change Freq.</th><th>Priority</th></tr>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="sitemap:priority"/></td>
                </tr>
              </xsl:for-each>
            </table>
          </xsl:if>

          <p class="footer">Sitemap generated for BookMelbourneTaxi.com</p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
