<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <title><xsl:value-of select="document('./XMLcompany.xml')/company/@name"/></title>
                <link rel="stylesheet" href="../lab3/style.css"/>
            </head>
            <body>
                <header>
                    <xsl:value-of select="document('./XMLcompany.xml')/company/@name"/>
                </header>
                <div class="container">
                    <aside>
                        <ul>
                            <li><a href="XMLcompany.xml">Company</a></li>
                            <li><a href="XMLDEP001.xml">Department 1</a></li>
                            <li><a href="XMLDEP002.xml">Department 2</a></li>
                        </ul>
                    </aside>
                    <main>
                        <xsl:apply-templates/>
                    </main>
                </div>
                <footer>
                    Copyright blahblahblah
                </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>