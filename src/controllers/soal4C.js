exports.calculateBMI = (req, res) => {
    const { berat, tinggi } = req.body;
    const tinggim = tinggi / 100
    const bmi = berat / (tinggim ** 2);
    let category;
  
    if (bmi < 18.5) {
      category = 'Kurang Berat Badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Kelebihan Berat Badan';
    } else {
      category = 'Kegemukan (Obesitas)';
    }
  
    res.json({ bmi: bmi.toFixed(2), category });
  };
  