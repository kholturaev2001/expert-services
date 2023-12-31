import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/expertise/automotive_expert.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import Ul from "../../../components/Typography/Ul";
import Title2 from "../../../components/Typography/Title2";
import Ol from "../../../components/Typography/Ol";
import Attention from "../../../components/Attention";

const AutomotiveExpert = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Главная",
          },
          {
            title: "Экспертиза",
          },
          {
            title: "Автотехническая",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        deadline="от 10 дней"
        price={25000}
        title="Автотехническая экспертиза"
      />
      <Description>
        Автотранспорт за последние десятилетия превратился в неотъемлемую часть
        жизни каждого человека. Автомобиль стал не просто средством
        передвижения, но также незаменимым помощником в повседневных делах. К
        несчастью, передвижение на автотранспорте, особенно в крупных
        мегаполисах, неизбежно сопровождается дорожно-транспортными
        происшествиями (ДТП). В результате ДТП выявляется лицо, виновное в его
        совершении, однако, зачастую указанное лицо отказывается признавать свою
        виновность. Это обусловлено тем, что на него возлагается обязанность
        возмещения ущерба, а виновность лица, при этом, не всегда
        устанавливается справедливо. В то же время пострадавшей стороне
        необходимо доказать наличие и фактический размер причиненного ущерба, а
        это создает определенные трудности, содержит множество нюансов и требует
        специальных знаний. Кроме того, зачастую имеются сомнения относительно
        уровня качества ремонта и иных работ, в результате которых были
        произведены изменения конструкции ТС, поскольку, если работы были
        выполнены с нарушением требований, вследствие чего повлекли ухудшение
        качества работы ТС, это может стать причиной ДТП.
      </Description>
      <Description>
        Чтобы достоверно определить обстоятельства ДТП, выявить неисправности ТС
        и их причины, возникает необходимость прибегнуть к автотехнической
        экспертизе.
      </Description>
      <Title>Объекты исследования</Title>
      <Description>К объектам указанной экспертизы относятся:</Description>
      <Ul>
        <li>место ДТП;</li>
        <li>транспортные средства;</li>
        <li>части ТС (узлы, детали, обломки и пр.).</li>
      </Ul>
      <Title2>Какие бывают автотехнические экспертизы?</Title2>
      <Ol>
        <li>
          Экспертиза обстоятельств ДТП. Эксперт определяет, как быстро двигалось
          ТС до и во время самого столкновения, и иные временные промежутки.
          Кроме того, рассчитывается допустимая скорость на рассматриваемом
          участке, время за которое ТС может преодолеть такой участок,
          исследуется возможность избежания ДТП и пр.
        </li>
        <Attention
          desc="Согласно существующей практике, при проведении автотехнической
          экспертизы, когда следует определить, имелась ли у водителя избежать
          наезда на пешехода при помощи торможения, экспертом исследуется
          примерно пятнадцать исходных данных. Если перед специалистом стоят
          более расширенные задачи, то количество исходных данных увеличивается
          до пятидесяти. Назначая экспертизу, необходимо все имеющиеся данные."
        />
        <li>
          Экспертиза технического состояния ТС. Устанавливается наличие
          неисправностей у исследуемого ТС, определяются обстоятельства их
          появления, наличие возможности их заблаговременного выявления,
          определяется вероятность взаимосвязи неисправностей и возникновения
          ДТП. Также эксперт определяет, мог ли водитель ТС избежать ДТП.
        </li>
        <li>
          Транспортно-трасологическая. Изучаются следы на ТС и месте ДТП, чтобы
          понять в каком положении относительно друг друга ТС находились в
          момент столкновения, определяются направление и траектории движения
          ТС. Кроме того, эксперт определяет, каким образом одно ТС нанесло
          повреждение другому, имеют ли выявленные повреждения прямую связь с
          исследуемым ДТП.
        </li>
        <li>
          Экспертиза автомобиля после ДТП. Эксперт изучает повреждения,
          являющиеся результатом ДТП, для расчета ущерба, определяет рыночную
          стоимость ТС и стоимость его ремонта. Эксперт также может установить
          утрату товарной стоимости ТС.
        </li>
        <li>
          Экспертиза дорожных условий. Названый подвид изучаемой экспертизы
          наименее часто встречается на практике. В её процессе изучаются
          дорожное полотно, знаки, а также разметка и различные конструкции,
          определяется насколько они соответствуют ГОСТам, определяется уровень
          организации дорожного движения на рассматриваемом участке.
        </li>
        <Attention
          desc='Поскольку, эксперт в своем заключении должен дать ответы на вопросы,
          затрагивающие все подвиды рассматриваемой экспертизы, во избежание
          путаницы и непонимания со стороны участников правоотношений, в
          определении (постановлении) указывается "автотехническая экспертиза"
          без указания отдельного подвида.'
        />
      </Ol>
      <Description>
        <b>Вопросы, стоящие перед экспертом</b>
      </Description>
      <Ul>
        <li>Какие пункты ПДД были нарушены участниками ДТП?</li>
        <li>
          Имелась ли у участника ДТП возможность не допустить столкновения
          посредством экстренного торможения?
        </li>
        <li>Соблюдался ли водителем ТС скоростной режим?</li>
        <li>Выявлены ли неисправности ТС? Послужили ли они причинами ДТП?</li>
        <li>Какие неисправности ТС выявлены, и каковы их причины?</li>
        <li>Выявлены на ТС повреждения, являющиеся следствием ДТП?</li>
        <li>В каком объеме требуется ремонт ТС?</li>
        <li>Как были расположены ТС во время столкновения?</li>
        <li>
          На каком расстоянии от встречного ТС следовало совершать обгон во
          избежание ДТП?
        </li>
        <li>В каком размере определяется стоимость ремонта ТС?</li>
      </Ul>
      <Attention
        desc="Выше приведен не полный список вопросов. Исходя из ситуации, у заказчика
        могут возникнуть иные вопросы. При необходимости постановки новых
        вопросов, следует обратиться с ними к эксперту до момента начала
        проведения экспертизы."
      />
      <Description>
        В результате проведения экспертизы заказчику выдается письменно
        оформленное экспертное заключение, содержащее в себе ответы на все
        поставленные вопросы. От качества проведенной экспертизы зависят
        последствия спорной ситуации, а также уровень доказательств при судебных
        разбирательствах. Экспертная деятельность, осуществляемая нашими
        сотрудниками, соответствует действующему законодательству. Все эксперты
        предупреждены об уголовной ответственности по статье 307 Уголовного
        кодекса РФ за дачу экспертом заведомо ложного заключения.
      </Description>
    </div>
  );
};

export default AutomotiveExpert;
