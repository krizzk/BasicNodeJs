    exports.DecimalToBinary = (req, res) => {
    const { number } = req.body;
    const binary = parseInt(number, 10).toString(2);
    res.json({ binary });
  };
  
  exports.BinaryToDecimal = (req, res) => {
    const { number } = req.body;
    const decimal = parseInt(number, 2).toString(10);
    res.json({ decimal });
  };
  
  exports.DecimalToOctal = (req, res) => {
    const { number } = req.body;
    const octal = parseInt(number, 10).toString(8);
    res.json({ octal });
  };
  
  exports.DecimalToHexadecimal = (req, res) => {
    const { number } = req.body;
    const hexadecimal = parseInt(number, 10).toString(16);
    res.json({ hexadecimal });
  };
  