SELECT * FROM (
		SELECT v.VENDOR_NAME, COUNT(PROFIT.PRODUCTS.VENDOR_ID) AS c  FROM PROFIT.PRODUCTS
        JOIN PROFIT.VENDORS AS v ON v.VENDOR_ID = PROFIT.PRODUCTS.VENDOR_ID  
        WHERE CREATED_AT <= CURRENT_DATE() AND CREATED_AT >= CURRENT_DATE() - 10
        GROUP BY PROFIT.PRODUCTS.VENDOR_ID
        )
	AS a 
    WHERE a.c >= 3; 