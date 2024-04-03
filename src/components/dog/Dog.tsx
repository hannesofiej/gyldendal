
import { ReactComponent as Minikvik } from '../../assets/svg/minikvik.svg'
import { ReactComponent as MinikvikWrong1 } from '../../assets/svg/MiniKvikWrong1.svg'
import { ReactComponent as MinikvikWrong2 } from '../../assets/svg/MiniKvikWrong2.svg'

type DogProps = {
  incorrect?: number;
};

function Dog({ incorrect }: DogProps) {

  switch (incorrect) {
    case 1:
      return <MinikvikWrong1 />;
    case 2:
      return <MinikvikWrong2 />;
    default:
      return <Minikvik />;
  }
}

export default Dog;