var formatValidation = {
    /**
     * @description 주민번호 검증 (* RRN : Resident Registration Number)
     * @param {*} value 
     * @returns Boolean
     */
    isRRN: function (value) {
        var regex = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-8][0-9]{6}$/;
        return regex.test(value);
    },

    /**
     * @description 사업자번호 검증 (* CRN : Corporate Registration Number)
     * @param {*} value 
     * @return Boolean
     */
    isCRN: function (value) {
        // - (하이픈) 제거
        var valueMap = value.replace(/-/gi, '').split('').map(function (item) {
            return parseInt(item, 10);
        });
    
        // 사업자번호 검증
        if (valueMap.length === 10) {
            var multiply = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5);
            var checkSum = 0;
    
            for (var i = 0; i < multiply.length; ++i) {
                checkSum += multiply[i] * valueMap[i];
            }
    
            checkSum += parseInt((multiply[8] * valueMap[8]) / 10, 10);
            return Math.floor(valueMap[9]) === (10 - (checkSum % 10));
        }
        
        return false;
    },
    
};


