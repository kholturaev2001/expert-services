import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/commercial_estate.jpg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import LiColored from "../../../components/Typography/LiColored";

const CommercialEstate = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Недвижимость",
          },
          {
            title: "Коммерческая",
          },
          {
            title: "Торговый объект",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Оценка объектов торговой недвижимости" />
      <Description>Оценка объектов торговой недвижимости</Description>
      <Title>Цели оценки коммерческих зданий и сооружений</Title>
      <Description>
        Независимая оценка торговой точки с составлением официального отчёта
        проводится для достижения следующих целей:
      </Description>
      <LiColored>
        Оформление договора купли-продажи с последующим отчуждением имущества в
        пользу третьих лиц.
      </LiColored>
      <LiColored>
        Заключение кредитного договора с временным отчуждением торговых площадей
        в пользу финансовой организации до момента возврата заёмных средств.
      </LiColored>
      <LiColored>
        Перепланировка помещений с оформлением нового кадастрового паспорта.
      </LiColored>
      <LiColored>Реструктуризация долговых обязательств.</LiColored>
      <LiColored>Смена собственника юридического лица.</LiColored>
      <LiColored>Оформление переуступки прав в досудебном порядке.</LiColored>
      <LiColored>
        Инициирование судебного производства, при наличии претензий к
        собственнику объекта.
      </LiColored>
      <LiColored>
        Раздел собственности между бывшими партнёрами, супругами или прочими
        заинтересованными лицами.
      </LiColored>
      <LiColored>
        Сдача объекта торговой недвижимости в аренду – для расчёта ежемесячной
        ставки.
      </LiColored>
      <Description>
        Таким образом, оценка проводится в основном для оформления сделок, для
        сдачи в аренду, для суда или нотариуса, для страхования объекта, для
        кредитования под залог имущества, для принятия управленческих решений.
      </Description>
      <Description>
        При наличии нескольких помещений, предназначенных для коммерческого
        использования, зарегистрированных за одним собственником, расположенных
        в едином эксплуатируемом комплексе, допускается оформление
        комбинированного отчёта с вычленением как общей цены, так и рыночной
        стоимости каждого из них.
      </Description>
      <Title>Как рассчитывается стоимость и что на неё влияет</Title>
      <Description>
        Стоимость объекта недвижимости рассчитывается согласно определённому
        алгоритму, и на её величину влияют следующие факторы:
      </Description>
      <LiColored>
        Оценка суммы инвестиционных вложений владельца в коммерческие площади.
      </LiColored>
      <LiColored>
        Рентабельность предприятия по итогам отчётного периода.
      </LiColored>
      <LiColored>
        Уровень физического износа конструкций или элементов отделки.
      </LiColored>
      <LiColored>Балансовая стоимость имущественных активов.</LiColored>
      <LiColored>Наличие долговых или кредитных обязательств.</LiColored>
      <LiColored>Нахождение здания в залоге или аресте.</LiColored>
      <LiColored>
        Наличие территории для парковки, качество подъездных путей, уровень
        инфраструктуры для комфорта посетителей.
      </LiColored>
      <LiColored>
        Соответствие оцениваемых коммерческих площадей требованиям действующих
        нормативов.
      </LiColored>
      <LiColored>
        Наличие согласованного проекта, а также форма собственности на землю, на
        которой располагается оцениваемая недвижимость.
      </LiColored>
      <LiColored>Удалённость объекта от города.</LiColored>
      <Description>
        <i>
          На конечную стоимость объекта коммерческой недвижимости также влияет
          количество конкурентных предложений в рассматриваемом районе,
          проходимость точки и возможность потенциального развития бизнеса.
        </i>
      </Description>
      <Title>
        Отличается ли оценка торговых центров и прочей коммерческой недвижимости
      </Title>
      <Description>
        Оценка торговых комплексов проводится практически по тому же алгоритму,
        что и для иных объектов торговой коммерческой недвижимости. Разница
        заключается в функциональном назначении здания или сооружения. Также
        дополнительно проводится анализ всех объектов инфраструктуры, которые
        должны относиться к торговой точке.
      </Description>
      <Description>
        Для предприятия торговли важно наличие склада, зоны обслуживания
        посетителей, подземная парковка и другие элементы комфорта для
        потенциальных клиентов, что существенно увеличивает привлекательность
        объекта. В случае с другой коммерческой недвижимостью, например, если
        речь идёт об офисном здании, такие элементы могут не требоваться.
      </Description>
      <Title>Методы оценки коммерческой и торговой недвижимости</Title>
      <Description>
        При оценке торгового центра уполномоченное лицо прибегает к одному из
        следующих подходов:
      </Description>
      <LiColored>
        <b>Доходный.</b> Оценивается сумма совокупной прибыли, которая была
        получена за последний отчётный период.
      </LiColored>
      <LiColored>
        <b>Расходный.</b> Определяется итоговый размер инвестиционных вложений
        собственника для организации бизнеса по работе торгового центра.
      </LiColored>
      <LiColored>
        <b>Сравнительный.</b> Проводится детальный анализ рынка конкурентов, а
        также аналогичных зданий и сооружений в рассматриваемом регионе.
      </LiColored>
      <Description>
        При оценке торгового центра для банка с целью оформления залога и
        получения кредита учитывается ликвидационная стоимость объекта. В данном
        случае имеется в виду цена, за которую финансовая организация сможет
        выставить объект на аукционе для быстрого восполнения активов.
      </Description>
      <Title>Перечень необходимых документов</Title>
      <Description>
        Для составления объективного отчёта по результатам проведения оценки
        объекта торговой недвижимости уполномоченное лицо запрашивает следующий
        перечень официальных документов или их заверенных копий в зависимости от
        ситуации:
      </Description>
      <LiColored>Правоустанавливающая документация на недвижимость.</LiColored>
      <LiColored>Копии учредительных документов.</LiColored>
      <LiColored>
        Кадастровые паспорта на каждую коммерческую точку, принадлежащую
        собственнику.
      </LiColored>
      <LiColored>Договоры аренды.</LiColored>
      <LiColored>Финансовая отчётность за последний год.</LiColored>
      <LiColored>Данные об оборудовании.</LiColored>
      <LiColored>Кредитные договоры - при их наличии.</LiColored>
      <LiColored>
        Проектная документация на рассматриваемый объект торговой недвижимости.
      </LiColored>
      <Description>
        В процессе аналитических действий эксперт может также запросить
        дополнительную документацию, которая поможет точно определить цену
        недвижимости.
      </Description>
      <Title>Стоимость и сроки оказания услуг</Title>
      <Description>
        Для расчёта стоимости наших услуг составляется подробная смета, в
        которой учитываются базовые расценки компании, а также корректирующие
        коэффициенты, зависящие от следующих факторов:
      </Description>
      <LiColored>Количество коммерческих точек.</LiColored>
      <LiColored>Площадь оцениваемых помещений.</LiColored>
      <LiColored>Размер прилегающей территории.</LiColored>
      <LiColored>
        Объёмно-планировочные и технико-экономические показатели объекта.
      </LiColored>
      <LiColored>Состояние основных конструкций сооружения.</LiColored>
      <LiColored>Место предоставления отчёта об оценке.</LiColored>
      <LiColored>
        Наличие обременений, судебных разбирательств или других факторов,
        влияющих на объём аналитических работ.
      </LiColored>
      <LiColored>Выбранная методика оценки.</LiColored>
      <LiColored>Содержание технического задания.</LiColored>
      <Description>
        <i>
          При обращении в нашу организацию клиенты могут быть уверены в
          надлежащем качестве услуг, скорости их выполнения и корректном расчёте
          стоимости интересующего объекта торговой недвижимости. Цены на наши
          услуги оптимальны по рынку в Москве, а опыт работы с 2005 года
          позволяет гарантировать решение широкого спектра задач.
        </i>
      </Description>
    </div>
  );
};

export default CommercialEstate;
