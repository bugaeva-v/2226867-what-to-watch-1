type PlayerProps = {
  src: string;
  posterImage: string;
  muted: boolean;
};

const Player = (props: PlayerProps): JSX.Element => (
  <video src={props.src} poster={props.posterImage} muted={props.muted} width="280" height="175" autoPlay />
);

export default Player;
