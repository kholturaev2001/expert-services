import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/transport/car_valuation.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "antd/es/skeleton/Title";
import LiColored from "../../../components/Typography/LiColored";

const CarValuation = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Транспорт",
          },
          {
            title: "Стоимость автомобиля",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка стоимости автомобиля"
        deadline="от 5 дней"
        price={5000}
      />
      <Description>
        Автомобиль – это дорогостоящее движимое имущество. Его оценка требует
        профессионального, формального подхода, в результате которого клиент
        получает на руки официальный документ, имеющий юридическую силу – отчет
        об оценке с указанием рыночной стоимости транспортного средства.
      </Description>
      <Title>В каких случаях требуется оценка</Title>
      <Description>
        Ситуаций, когда требуется определить реальную стоимость автомобиля,
        достаточно много. Наша практика показывает, что наиболее
        распространенными причинами являются:
      </Description>
      <LiColored>
        Оформление наследства. В этом случае оценка необходима для определения
        размера нотариальной пошлины – тарифа, который взимается нотариусами за
        выдачу свидетельства. Без выплаты этой пошлины вы просто не сможете
        вступить в наследство и, соответственно, зарегистрировать права
        собственности. Определение стоимости авто проводится на дату смерти
        владельца.
      </LiColored>
      <LiColored>
        Раздел имущества в ходе развода. Как правило, в таких случаях муж
        оставляет машину себе, однако в дальнейшем возникает ситуация, когда
        жена подает иск о разделе имущества. Оценка автомобиля позволяет
        избежать конфликтов, когда супруги называют разную стоимость авто.
      </LiColored>
      <LiColored>
        Купля-продажа машины. В этом случае заинтересованной стороной выступает
        покупатель, поскольку продавец и так приблизительно знает реальную
        стоимость ТС и вполне ожидаемо старается ее завысить. Экспертная оценка
        автомобиля гарантирует покупателю, что он не переплатит за транспортное
        средство. Более того, услуга подразумевает выяснение технического
        состояния автомобиля, что сводит к нулю риск купить «авто-утопленник»
        или битый автомобиль.
      </LiColored>
      <Description>
        Кроме этого, оценка стоимости требуется и в других ситуациях, например,
        при подаче налоговой декларации, оформлении банковского кредита,
        отчуждении имущества, судовых спорах. Этой услугой также активно
        пользуются юридические лица, поскольку она позволяет снизить налоговые
        риски при определении размера базы налогообложения.
      </Description>
      <Title>Какие документы нужны для оценки</Title>
      <LiColored>Паспорт заказчика услуги.</LiColored>
      <LiColored>
        Паспорт транспортного средства и свидетельство о его регистрации.
      </LiColored>
      <LiColored>
        Свидетельство о смерти, если оценка нужна для оформления наследства.
      </LiColored>
      <Description>
        Этих документов достаточно для заключения договора и проведения
        необходимых процедур. При продаже или передаче автомобиля юридическим
        лицом требуется предоставить реквизиты собственника.
      </Description>
      <Title>Как оцениваются автомобили</Title>
      <Description>
        Существует три базовых метода определения стоимости транспортного
        средства:
      </Description>
      <LiColored>
        <b> Сравнительный.</b> Стоимость авто сравнивается с аналогичными
        предложениями на рынке.
      </LiColored>
      <LiColored>
        <b>Доходный.</b>
        Определяет способность автомобиля приносить доход его владельцу.
      </LiColored>
      <LiColored>
        <b>Затратный.</b>
        Проводится на основании затрат на покупку ТС, расходов на обслуживание и
        ремонт.
      </LiColored>
      <Description>
        Ни один из трех подходов не дает полной картины о стоимости
        транспортного средства, поэтому эксперт использует все три метода
        одновременно. Важно понять, что при оценке автомобиля полностью
        исключается субъективный фактор. Профессиональные оценщики работают на
        основе методического руководства, разработанного научным центром «НАМИ»
        в сотрудничестве с Федеральным центром судебной экспертизы. Методические
        рекомендации этих организаций позволяют с высокой точностью определить
        стоимость авто на основе общепринятых расчетных формул. Во внимание
        берутся такие факторы, как розничная цена, комплектность авто, расчетный
        и индивидуальный процент износа. В ходе расчетов используются сложные
        формулы, дающие полную и целостную картину о состоянии и стоимости
        автомобиля.
      </Description>
      <Title>Этапы оценки</Title>
      <LiColored>
        Документальное обследование. Анализируются документы, проверяется
        кредитная история и юридическая чистота автомобиля.
      </LiColored>
      <LiColored>
        Оценка технического состояния. Процедура включает в себя осмотр кузова,
        проверку лакокрасочного покрытия, экспертизу подвески, шин, двигателя.
        Особое внимание уделяется состоянию оптики и салона, поскольку именно
        эти элементы позволяют определить возраст авто и выявить скрутку пробега
        на одометре.
      </LiColored>
      <LiColored>
        Маркетинговый анализ и сопоставление цен на рынке. Во внимание берутся
        цены на первичном и вторичном рынке с учетом данных официальных дилеров.
      </LiColored>
      <LiColored>
        Расчет реальной стоимости на основе собранных данных.
      </LiColored>
      <Description>
        <i>
          Итоговый результат оценки – выдача отчета с указанием технического
          состояния транспортного средства и его реальной стоимости. Физически
          это документ на 30-40 страницах, прошитых, пронумерованных и
          скрепленных печатью. Отчет является официальным документом и может
          использоваться в суде, для выдачи кредита и в других целях. Срок
          составления отчета – до 10 дней в зависимости от марки и состояния
          автомобиля. Документ имеет юридическую силу на протяжении 6 месяцев.
          После их завершения придется оценивать автомобиль заново.
        </i>
      </Description>
    </div>
  );
};

export default CarValuation;
