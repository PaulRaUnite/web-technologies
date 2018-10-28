<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:import href="template.xsl"/>

    <xsl:template match="sotr">
        <p>Staff of department:
            <xsl:value-of select="./@name"/>
        </p>
        <ul>
            <xsl:for-each select="s">
                <li>
                    <xsl:value-of select="concat(@name, ' ', @fam)"/>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>

    <xsl:template match="/">
        <xsl:apply-imports/>
    </xsl:template>
</xsl:stylesheet>