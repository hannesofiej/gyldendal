
import { ReactComponent as Minikvik } from '../../assets/svg/minikvik.svg'
import { ReactComponent as MinikvikWrong1 } from '../../assets/svg/MiniKvikWrong1.svg'
import { ReactComponent as MinikvikWrong2 } from '../../assets/svg/MiniKvikWrong2.svg'

type DogProps = {
  incorrect?: number;
};

function Dog({ incorrect }: DogProps) {

  switch (incorrect) {
    case 1:
      return <div><MinikvikWrong1 /></div> ;
    case 2:
      return <div><MinikvikWrong2 /></div> ;
    default:
      return <div><Minikvik /></div>;
  }
}

export default Dog;