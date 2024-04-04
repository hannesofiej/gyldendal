
import { ReactComponent as Minikvik } from '../../assets/svg/minikvik.svg'
import { ReactComponent as MinikvikCorrect } from '../../assets/svg/MiniKvikCorrect.svg'
import { ReactComponent as MinikvikCorrecting } from '../../assets/svg/MiniKvikCorrecting.svg'
import { ReactComponent as MinikvikWrong1 } from '../../assets/svg/MiniKvikWrong1.svg'
import { ReactComponent as MinikvikWrong2 } from '../../assets/svg/MiniKvikWrong2.svg'

type DogProps = {
  state?: number;
};

const Dog: React.FC<DogProps> = ({ state }) => {

  switch (state) {
    case 1:
      return <MinikvikCorrect />;
    case 2:
      return <MinikvikCorrecting />;
    case -1:
      return <MinikvikWrong1 />;
    case -2:
      return <MinikvikWrong2 />;
    default:
      return <Minikvik />;
  }
}

export default Dog;