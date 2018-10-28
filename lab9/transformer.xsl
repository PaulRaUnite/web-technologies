<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="student">
        <li>
            <span>
                <xsl:value-of select="concat(@fam, ' ', @name, ' ', @sname)"/>
            </span>
        </li>
    </xsl:template>
    <xsl:template match="/">
        <html>
            <body>
                <h3>List of people who wrote Informatics test:</h3>
                <ul>
                    <xsl:apply-templates select="/group/student[./predmet/@name='Информатика']"/>
                </ul>
                <h3>List of people who have 2 points on a subject:</h3>
                <ul>
                    <xsl:for-each select="/group/student">
                        <xsl:if test="predmet/@value = 2">
                            <xsl:apply-templates select="."/>
                        </xsl:if>
                    </xsl:for-each>
                </ul>
                <h3>List of people who has all 5s:</h3>
                <ul>
                    <xsl:for-each select="/group/student">
                        <xsl:if test="count(predmet[@value = 5]) = count(*)">
                            <xsl:apply-templates select="."/>
                        </xsl:if>
                    </xsl:for-each>
                </ul>
                <h3>List of students and their average marks:</h3>
                <ul>
                    <xsl:for-each select="/group/student">
                        <xsl:variable name="average" select="sum(predmet/@value) div count(predmet)"/>
                        <li>
                            <span>
                                <xsl:value-of select="concat(@fam, ' ', @name, ' ', @sname)"/>
                            </span>
                            <span>
                                <xsl:choose>
                                    <xsl:when test="$average >= 4">
                                        <xsl:attribute name="style">
                                            <xsl:text>font-weight: bold;</xsl:text>
                                        </xsl:attribute>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:attribute name="style">
                                            <xsl:text>font-style: italic;</xsl:text>
                                        </xsl:attribute>
                                    </xsl:otherwise>
                                </xsl:choose>
                                Average: <xsl:value-of select="$average"/>
                            </span>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>