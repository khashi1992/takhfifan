/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "face",
        yekan: "face",
      },
      animation: {
        'slide': 'slideInUp 0.4s both',
        'slidedown':'slideindown 0.4s both',
      },
      keyframes: {
        slideInUp: {
          '0%': { transform: 'translateY(100%)',visibility: 'visible' },
          '100%': { transform: 'translateY(0)' },
        },
        slideindown: {
          '0%': { transform: 'translateY(-100%)',visibility: 'visible' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'bgheader': "url(../src/asset/img/1ab0eba6c67043ceafe6079a47550f69.jpg)",
        'bg1': "url(../src/asset/img/1.jpg)",
        'bg2': "url(../src/asset/img/2.jpg)",
        'bg3': "url(../src/asset/img/3.jpg)",
        'bg4': "url(../src/asset/img/4.jpg)",
        'bg5': "url(../src/asset/img/5.jpg)",
        'bg6': "url(../src/asset/img/6.jpg)",
        'bg7': "url(../src/asset/img/7.jpg)",
        'bg8': "url(../src/asset/img/8.jpg)",
        'bg9': "url(../src/asset/img/9.jpg)",
        'bg10': "url(../src/asset/img/10.jpg)",
        'bg11': "url(../src/asset/img/11.jpg)",
        'bg12': "url(../src/asset/img/12.jpg)",
        'bg13': "url(../src/asset/img/13.jpg)",
        'bg14': "url(../src/asset/img/14.jpg)",
        'bg15': "url(../src/asset/img/15.jpg)",
        'bg16': "url(../src/asset/img/16.jpg)",
        'bg17': "url(../src/asset/img/17.jpg)",
        'bg18': "url(../src/asset/img/18.jpg)",
        'bg19': "url(../src/asset/img/19.jpg)",
        'bg25': "url(../src/asset/img/aaa.jpg)",
        'bg27': "url(../src/asset/img/89.jpg)",
        'bg23': "url(../src/asset/img/ccc.jpg)",
        'bg24': "url(../src/asset/img/ddd.jpg)",
        'bg26': "url(../src/asset/img/111.jpg)",
        'bg27': "url(../src/asset/img/222.jpg)",
        'bg28': "url(../src/asset/img/333.jpg)",
        'bg29': "url(../src/asset/img/444.jpg)",
        'bg30': "url(../src/asset/img/1111.jpg)",
        'bg31': "url(../src/asset/img/2222.jpg)",
        'bg20': "url(../src/asset/img/d9767584a07c358a34e7feea33dcfed8.jpg)",
        'bg21': "url(../src/asset/img/f21fe969feedb5bd1c0c0de440aa5325.jpg)",

       
      },
    
      boxShadow: {
        'head': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'picshadow': '0 1px 3px 0 rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}

