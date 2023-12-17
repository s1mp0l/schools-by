import {View} from "react-native";
import BriefCaseSvg from '../../../../assets/icons/briefcase.svg';
import MailSvg from '../../../../assets/icons/mail.svg';
import MapPinSvg from '../../../../assets/icons/map-pin.svg';
import PhoneSvg from '../../../../assets/icons/phone.svg';
import {CustomText} from "../../../shared/ui/CustomText";
import {SchoolInfoItem} from "../components/SchoolInfoItem";
import {PageLayout} from "../../../shared/ui/PageLayout";


export const SchoolInfoPage = () => {
  return (
    <PageLayout>
      <View style={{gap: 10}}>
        <CustomText text={'Государственное учреждение образования “Гимназия \n' +
          'имени Я. Купалы”'} type={'title'} />
        <View style={{gap: 20}}>
          <SchoolInfoItem title={''}
                          text={'Учреждение общего среднего образования / Установа агульнай сярэдней адукации'}>
            <BriefCaseSvg width={40} height={40}/>
          </SchoolInfoItem>
          <SchoolInfoItem title={'г. Мозырь, ул. Я. Колоса 2,'}
                          text={'Республика Беларусь, Гомельская область, 247760'}>
            <MapPinSvg width={40} height={40}/>
          </SchoolInfoItem>
          <SchoolInfoItem title={'+375236230703'} phoneTitle={true}
                          text={'(Заместитель директора по воспитательной работе)'}>
            <PhoneSvg width={40} height={40}/>
          </SchoolInfoItem>
          <SchoolInfoItem title={'+375236230474'} phoneTitle={true}
                          text={'(Заместитель директора по учебной работе)'}>
            <PhoneSvg width={40} height={40}/>
          </SchoolInfoItem>
          <SchoolInfoItem title={'gimnazia@gmail.com'}
                          text={''}>
            <MailSvg width={40} height={40}/>
          </SchoolInfoItem>
        </View>
      </View>
    </PageLayout>
  );
};