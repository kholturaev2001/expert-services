import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/damage/damage_after_fire_valuation.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import Title2 from "../../../components/Typography/Title2";
import LiColored from "../../../components/Typography/LiColored";
import Ul from "../../../components/Typography/Ul";
import Title3 from "../../../components/Typography/Title3";

const DamageAfterFire = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Ущерб",
          },
          {
            title: "Оценка после пожара",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка ущерба после пожара"
        deadline="от 15 дней"
        price={6000}
      />
      <Description>
        Пожар – одно из тяжелейших происшествий, которое причиняет не только
        материальный ущерб, но и забирает множество жизней. Неосторожное
        обращение с огнем и неправильное пользование газовыми устройствами может
        привести к возгоранию.
      </Description>
      <Title>Оценка ущерба от пожара: что это такое?</Title>
      <Description>
        Если произошел пожар, и вы хотите добиться полного возмещения убытков,
        необходимо произвести оценку ущерба после пожара. В ходе данной
        процедуры определяется рыночная стоимость того, что было частично
        разрушено или уничтожено в следствие возгорания.
      </Description>
      <Title2>Когда необходима оценка ущерба после пожара</Title2>
      <Description>Данное обследование проходит, если:</Description>
      <LiColored>
        вы не согласны с величиной назначенного ущерба, которую вам представила
        пострадавшая сторона;
      </LiColored>
      <LiColored>
        хотите обеспечить объективное рассмотрение дела в суде;
      </LiColored>
      <LiColored>
        пожар произошел по вине жилищно-коммунальной службы;
      </LiColored>
      <LiColored>
        хотите определить рыночную стоимость ремонтно-реконструкционных работ
        после возгорания;
      </LiColored>
      <LiColored>
        считаете, что страховая занизила компенсационную сумму;
      </LiColored>
      <LiColored>возгорание произошло по вине соседей;</LiColored>
      <LiColored>
        хотите застраховать имущество и вам нужен отчет о его стоимости.
      </LiColored>
      <Title2>Когда проводится?</Title2>
      <Description>
        Обычно оценка убытков при возгорании осуществляется по постановлению
        суда или по инициативе физического лица. В ходе данной процедуры
        оценивается возможность проведения ремонтно-реконструкционных работ.
        Если это сделать невозможно, определяется объем работ по сносу и
        возведению нового здания.
      </Description>
      <Description>Затем эксперт устанавливает рыночную стоимость:</Description>
      <LiColored>
        работ по восстановлению помещений, включая их санобработку;
      </LiColored>
      <LiColored>реставрационных работ;</LiColored>
      <LiColored>
        механизмов для строительства нового здания (вывоз строймусора, снос
        объекта и т.п.);
      </LiColored>
      <LiColored>
        уничтоженного имущества (оборудования, мебели и пр.).
      </LiColored>
      <Description>
        При необходимости осуществляется проверка работы бытовой техники.
      </Description>
      <Title>Что входит в независимую оценку?</Title>
      <Description>
        Данное исследование состоит из следующих мероприятий:
      </Description>
      <LiColored>оформление документации для подачи судебного иска;</LiColored>
      <LiColored>
        проведение тщательного обследования с целью установления причин
        возгорания;
      </LiColored>
      <LiColored>
        полный фотоотчет помещения, в котором произошел пожар;
      </LiColored>
      <LiColored>проведение расчетов на всю пострадавшую жилплощадь;</LiColored>
      <LiColored>
        документальная фиксация всех убытков, причиненных вследствие возгорания.
      </LiColored>
      <Description>
        Наши специалисты имеют большой опыт работы в этой сфере. Мы проведем
        тщательный осмотр помещений и подготовим все необходимые документы, а
        также избавим вас от участия во всех организационных вопросах. С нами вы
        избежите повторных судебных рассмотрений и независимых экспертиз. Оценка
        убытков при возгорании пройдет быстро и позволит компенсировать все его
        последствия.
      </Description>
      <Title>Какие документы потребуются?</Title>
      <Description>Для оценки ущерба нужны следующие документы:</Description>
      <Title3>Физическим лицам</Title3>
      <Ul>
        <li>правоустанавливающая документация;</li>
        <li>
          справка от пожарников или акт осмотра от Управляющей Компании (УК);
        </li>
        <li>паспорт;</li>
        <li>фотоотчет уничтоженного имущества;</li>
        <li>паспорт БТИ, кадастровый паспорт и пр. техдокументация.</li>
      </Ul>
      <Title3>Юр. лицам</Title3>
      <Ul>
        <li>
          акт осмотра от Управляющей Компании (УК) или справка от пожарников;
        </li>
        <li>
          договор аренды, свид-во о собственности и пр. правоустанавливающая
          документация;
        </li>
        <li>реквизиты юр. лица;</li>
        <li>
          документы, которые служат подтверждением имущественной стоимости;
        </li>
        <li>
          фото уничтоженного имущества и документы, которые подтверждают его
          стоимость;
        </li>
        <li>
          техдокументация (проектно-разрешительная документация, паспорт БТИ и
          т.д.).
        </li>
      </Ul>
      <Title>Результаты оценки</Title>
      <Description>
        В результате заказчик получит экспертное заключение, которое состоит из:
      </Description>
      <LiColored>акта осмотра;</LiColored>
      <LiColored>вводно-описательной частей;</LiColored>
      <LiColored>документации экспертной компании;</LiColored>
      <LiColored>
        расчета стоимости ремонтно-восстановительных работ по ликвидации ущерба;
      </LiColored>
      <LiColored>документации на объект оценки;</LiColored>
      <LiColored>
        расчета стоимости используемых материалов\работ, необходимых для
        устранения ущерба;
      </LiColored>
      <LiColored>фотоотчета объекта оценки.</LiColored>
      <Title2>Важно!</Title2>
      <Description>
        <i>
          !!! Прежде чем обратиться в экспертную компанию, следует известить
          виновную сторону. Ее нужно обязательно уведомить до приезда эксперта.
          Есть два варианта как это можно сделать – вручить лично в руки или
          отправить телеграмму с уведомлением.
        </i>
      </Description>
      <Title2>Подводим итоги</Title2>
      <Description>
        Любые ошибки в оценке ущерба после возгорания недопустимы. Поэтому
        доверить эту работу следует высококвалифицированным специалистам.
        Эксперты нашей компании произведут оценку причиненного ущерба быстро и
        качественно. Мы имеем безупречную репутацию и большой опыт работы,
        предоставляя услуги на профессиональном уровне и исчерпывающие
        консультации по всем вопросам. После получения на руки заключения
        экспертов, вы будете знать стоимость понесенных убытков после
        происшествия. Это обеспечит защиту в суде и позволит возместить ущерб.
      </Description>
      <Title2>Преимущества обращения к нам</Title2>
      <Description>
        Вы непременно оцените все плюсы сотрудничества с нами:
      </Description>
      <LiColored>безупречная репутация в сфере экспертизы;</LiColored>
      <LiColored>квалифицированные эксперты;</LiColored>
      <LiColored>гибкая ценовая политика;</LiColored>
      <LiColored>кратчайшие сроки выполнения работ;</LiColored>
      <LiColored>предоставление профессиональных консультаций.</LiColored>
    </div>
  );
};

export default DamageAfterFire;
