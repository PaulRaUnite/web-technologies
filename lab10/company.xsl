<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:import href="template.xsl"/>

    <xsl:template match="company">
        <p>Contacts of company: <xsl:value-of select="./@name"/></p>
        <ul>
            <li>Address: <xsl:value-of select="adress"/></li>
            <li>Phone: <xsl:value-of select="telefon"/></li>
            <li>Email: <xsl:value-of select="mail"/></li>
        </ul>
    </xsl:template>

    <xsl:template match="/">
        <xsl:apply-imports/>
    </xsl:template>

</xsl:stylesheet>