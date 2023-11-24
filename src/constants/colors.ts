export const colors = {
  dark: '0 0 0', //#000000
  light: '255 255 255', //#FFFFFF
  muted: '207 208 209', //#CFD0D1
  info: '0 122 255', //#007AFF

  background: {
    dark: '17 27 33', //#111B21
    light: '235 229 222', //#EBE5DE
    brand: '235 237 240', //#EBEBF0
  },

  brand: {
    0: '33 92 84', //#215C54
    1: '53 137 126', //#35897E
    2: '89 206 114', //#59CE72
    3: '255 255 255', //#FFFFFF
    4: '224 246 202', //#E0F6CA
    5: '79 182 236', //#4FB6EC
    6: '235 229 222', //#EBE5DE
  },

  body: {
    dark: '27 30 33', //#1B1E21
    light: '255 255 255', //#FFFFFF
  },
};

export const theme = {
  colors: {
    dark: `rgb(${colors.dark})`,
    light: `rgb(${colors.light})`,
    muted: `rgb(${colors.muted})`,
    info: `rgb(${colors.info})`,

    background: {
      dark: `rgb(${colors.background.dark})`,
      light: `rgb(${colors.background.light})`,
      brand: `rgb(${colors.background.brand})`,
    },

    brand: {
      0: `rgb(${colors.brand[0]})`,
      1: `rgb(${colors.brand[1]})`,
      2: `rgb(${colors.brand[2]})`,
      3: `rgb(${colors.brand[3]})`,
      4: `rgb(${colors.brand[4]})`,
      5: `rgb(${colors.brand[5]})`,
      6: `rgb(${colors.brand[6]})`,
    },

    body: {
      dark: `rgb(${colors.body.dark})`,
      light: `rgb(${colors.body.light})`,
    },
  },
};
