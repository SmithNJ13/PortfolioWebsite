import { motion } from 'framer-motion';

const WaveAnimation = ({animations}) => {
  return (
    <>
    { animations && (
    <div className="fixed sm:bottom-[0rem] sm:scale-[100%] bottom-[-6.75rem] scale-[1400%] w-full overflow-x-hidden z-[-1]">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="mx-auto block" style={{ background: 'transparent', zIndex: 1 }} width="100%" height="267" viewBox="0 0 1920 267">
        <g transform="translate(960,133.5) scale(1,-1) translate(-960,-133.5)">
          <linearGradient id="lg-0.5267772274449511" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#22a239" offset="0"></stop>
            <stop stopColor="#279339" offset="1"></stop>
          </linearGradient>
          <motion.path
            fill="#10b981"
            opacity="0.6"
            animate={{
              d: [
                "M0 0L 0 203.42581267557927Q 320 241.50090013514125  640 198.98202570325202T 1280 193.34256363139596T 1920 200.11132797027403L 1920 0 Z",
                "M0 0L 0 156.57029158539075Q 320 217.4717169769777  640 176.73369073018114T 1280 189.64166537999608T 1920 169.66667150407517L 1920 0 Z",
                "M0 0L 0 155.94170714928612Q 320 189.63223251132246  640 159.72716954585604T 1280 178.3996073742579T 1920 204.57770250626712L 1920 0 Z",
                "M0 0L 0 203.42581267557927Q 320 241.50090013514125  640 198.98202570325202T 1280 193.34256363139596T 1920 200.11132797027403L 1920 0 Z"
              ],
            }}
            transition={{
              duration: 4.166666666666666,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.5, 0, 0.5, 1],
              times: [0, 0.333, 0.667, 1],
            }}
          />
          <motion.path
            fill="#047857"
            opacity="0.6"
            animate={{
              d: [
                "M0 0L 0 202.2578886611058Q 320 216.73408990008386  640 183.75278547406907T 1280 187.71888170255954T 1920 167.6938474128508L 1920 0 Z",
                "M0 0L 0 147.0084700983394Q 320 192.34793346548193  640 174.38522627237194T 1280 161.9710304193014T 1920 190.11690848800362L 1920 0 Z",
                "M0 0L 0 207.91439489254577Q 320 223.80241828920853  640 207.21032879383014T 1280 157.3178600390366T 1920 175.95374755783646L 1920 0 Z",
                "M0 0L 0 202.2578886611058Q 320 216.73408990008386  640 183.75278547406907T 1280 187.71888170255954T 1920 167.6938474128508L 1920 0 Z"
              ],
            }}
            transition={{
              duration: 4.166666666666666,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.5, 0, 0.5, 1],
              times: [0, 0.333, 0.667, 1],
              delay: -2.1,
            }}
          />
        </g>
      </svg>
    </div>
    )}
    { !animations && (
    <div className="fixed sm:bottom-[0rem] sm:scale-[100%] bottom-[-6.75rem] scale-[1400%] w-full overflow-x-hidden z-[-1]">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="mx-auto block" style={{ background: 'transparent', zIndex: 1 }} width="100%" height="267" viewBox="0 0 1920 267">
        <g transform="translate(960,133.5) scale(1,-1) translate(-960,-133.5)">
          <linearGradient id="lg-0.5267772274449511" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#22a239" offset="0"></stop>
            <stop stopColor="#279339" offset="1"></stop>
          </linearGradient>
          <motion.path
            fill="#10b981"
            opacity="0.6"
            animate={{
              d: [
                "M0 0L 0 203.42581267557927Q 320 241.50090013514125  640 198.98202570325202T 1280 193.34256363139596T 1920 200.11132797027403L 1920 0 Z",
                "M0 0L 0 156.57029158539075Q 320 217.4717169769777  640 176.73369073018114T 1280 189.64166537999608T 1920 169.66667150407517L 1920 0 Z",
                "M0 0L 0 155.94170714928612Q 320 189.63223251132246  640 159.72716954585604T 1280 178.3996073742579T 1920 204.57770250626712L 1920 0 Z",
                "M0 0L 0 203.42581267557927Q 320 241.50090013514125  640 198.98202570325202T 1280 193.34256363139596T 1920 200.11132797027403L 1920 0 Z"
              ],
            }}
            transition={{
              duration: 0,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.5, 0, 0.5, 1],
              times: [0, 0.333, 0.667, 1],
            }}
          />
          <motion.path
            fill="#047857"
            opacity="0.6"
            animate={{
              d: [
                "M0 0L 0 202.2578886611058Q 320 216.73408990008386  640 183.75278547406907T 1280 187.71888170255954T 1920 167.6938474128508L 1920 0 Z",
                "M0 0L 0 147.0084700983394Q 320 192.34793346548193  640 174.38522627237194T 1280 161.9710304193014T 1920 190.11690848800362L 1920 0 Z",
                "M0 0L 0 207.91439489254577Q 320 223.80241828920853  640 207.21032879383014T 1280 157.3178600390366T 1920 175.95374755783646L 1920 0 Z",
                "M0 0L 0 202.2578886611058Q 320 216.73408990008386  640 183.75278547406907T 1280 187.71888170255954T 1920 167.6938474128508L 1920 0 Z"
              ],
            }}
            transition={{
              duration: 0,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.5, 0, 0.5, 1],
              times: [0, 0.333, 0.667, 1],
              delay: -2.1,
            }}
          />
        </g>
      </svg>
    </div>
    )}
    </>
  );
};

export default WaveAnimation;
