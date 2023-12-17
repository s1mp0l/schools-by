import {TouchableOpacity} from "react-native";
import AbsentSvg from '../../../../assets/icons/absent.svg'
import NotAbsentSvg from '../../../../assets/icons/not-absent.svg'

interface Props {
  value: boolean;
  onChangeValue?: () => void;
}

export const AbsenceCheckbox = ({value, onChangeValue}: Props) => {
  return (
    <TouchableOpacity style={{
      justifyContent: 'center', alignItems: 'center',
    }}>
      {value ? <AbsentSvg width={30} height={30}/> : <NotAbsentSvg width={30} height={30}/>}
    </TouchableOpacity>
  );
};