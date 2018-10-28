<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="page">
        <article>
            <header>
                <xsl:choose>
                    <xsl:when test="number mod 2 = 1">
                        <span>
                            Содержание
                        </span>
                        <span>
                            <xsl:value-of select="number"/>
                        </span>
                    </xsl:when>
                    <xsl:when test="number mod 2 = 0">
                        <span>
                            <xsl:value-of select="number"/>
                        </span>
                        <span>

                        </span>
                    </xsl:when>
                </xsl:choose>
            </header>
            <main>
                <xsl:apply-templates select="content/*"/>
            </main>
        </article>
    </xsl:template>
    <xsl:template match="p">
        <p>
            <xsl:value-of select="."/>
        </p>
    </xsl:template>
    <xsl:template match="img">
        <figure>
            <img>
                <xsl:attribute name="src">
                    <xsl:value-of select="source"/>
                </xsl:attribute>
            </img>
            <figcaption>
                <xsl:value-of select="caption"/>
            </figcaption>
        </figure>
    </xsl:template>
    <xsl:template match="document">
        <html>
            <link rel="stylesheet" href="style.css"/>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>