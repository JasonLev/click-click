const justicesArray = [
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Official_roberts_CJ.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Clarence_Thomas_official_SCOTUS_portrait.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Ruth_Bader_Ginsburg_official_SCOTUS_portrait.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Stephen_Breyer%2C_SCOTUS_photo_portrait.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Samuel_Alito_official_photo.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Sonia_Sotomayor_in_SCOTUS_robe.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Elena_Kagan_Official_SCOTUS_Portrait_%282013%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Associate_Justice_Neil_Gorsuch_Official_Portrait.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Associate_Justice_Brett_Kavanaugh_Official_Portrait.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Anthony_Kennedy_official_SCOTUS_portrait.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Antonin_Scalia_Official_SCOTUS_Portrait_crop.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/31/William_Rehnquist.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Sandra_Day_O%27Connor.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/John_Paul_Stevens%2C_SCOTUS_photo_portrait.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Justice_Blackmun_Official.jpg"
];

const justices = () => {
  return justicesArray.map((justice, index) => {
    const justiceObj = {
      id: index,
      isClicked: false,
      src: justice
    };
    return justiceObj;
  });
};

export default justices;