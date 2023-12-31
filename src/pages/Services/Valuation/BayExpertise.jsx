import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/damage/bay_expertise_valuation.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import LiColored from "../../../components/Typography/LiColored";
import Title2 from "../../../components/Typography/Title2";
import Ol from "../../../components/Typography/Ol";

const BayExpertise = () => {
  return (
    <div>
<HeadBreadcrumb
        items={[
          {
            title: 'Главная'
          },
          {
            title: "Оценка",
          },
          {
            title: "Ущерб",
          },
          {
            title: "Экспертиза после залива",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Экспертиза после залива"
        deadline="от 14 дней"
        price={5000}
      />
      <Description>
        Жители многоэтажек часто сталкиваются с проблемой залива соседями
        верхних этажей, но мало кто знает, как нужно при этом действовать. Ущерб
        от происшествия может быть значительным, особенно при наличии хорошего
        ремонта в квартире, а разрешить проблему мирным путем удается редко.
        Чтобы гарантированно получить компенсацию за нанесенные убытки,
        необходимо заказывать профессиональную <b>экспертизу после залива</b>.
        Специалисты установят причину произошедшего и помогут добиться
        справедливости.
      </Description>
      <Title>Возможные причины</Title>
      <Description>
        Не всегда в происшествии виноваты владельцы квартиры, проживающие
        сверху, ведь привести к затоплению могут различные факторы:
      </Description>
      <LiColored>
        неудовлетворительное состояние инженерных коммуникаций;
      </LiColored>
      <LiColored>неисправное сантехническое оборудование;</LiColored>
      <LiColored>повышенное давление в трубах;</LiColored>
      <LiColored>неполадки в работе бытовой техники;</LiColored>
      <LiColored>человеческий фактор.</LiColored>
      <Description>
        Установление причины аварии необходимо для того, чтобы найти истинного
        «виновника». Если окажется, что виноваты устаревшие трубы или
        оборудование, которое находится на гарантийном сроке эксплуатации,
        компенсацию должны выплачивать коммунальные службы или производители.
        Своими силами доказать вину сторонней организации не удастся, только
        заключение независимой экспертизы станет весомым доводом в пользу
        выплаты ущерба пострадавшей стороне.
      </Description>
      <Title>Как действовать в случае залива жилья?</Title>
      <Description>
        При правильной и быстрой последовательности действий удастся снизить
        возможные убытки и рассчитывать на быстрое разрешение ситуации в вашу
        пользу.
      </Description>
      <Title2>При первых признаках затопления следует:</Title2>
      <Ol>
        <li>
          Как можно быстрее устранить источник залива – обратиться к соседям,
          перекрыть воду, вызвать работников коммунальной службы;
        </li>
        <li>
          Зафиксировать факт аварии – записать дату и время звонка, личные
          данные сотрудника, принявшего вызов;
        </li>
        <li>
          Вызвать специалиста ЖЭКа – даже при небольших повреждениях вода может
          остаться в перекрытиях, что приведет к серьезным нарушениям в
          дальнейшем, мастер выполнит первичную оценку происшествия и установит
          причину аварии;
        </li>
        <li>
          Составить акт о заливе квартиры – на бумаге фиксируется ущерб,
          причиненный жилью, подробно и точно;
        </li>
        <li>
          Попробовать разрешить неприятную ситуацию мирным путем – пригласить
          соседей или других виновников для возмещения убытков без судебного
          вмешательства.
        </li>
      </Ol>
      <Description>
        Часто обвиняемые не соглашаются с требованиями пострадавших и
        отказывается выплачивать компенсацию. Тогда и потребуется независимая
        экспертиза после залива. Специалист оценит нанесенный ущерб, зафиксирует
        повреждения, составит смету на предстоящий ремонт. По итогу осмотра
        выдается официальный документ, имеющий юридическую силу при судебных
        разбирательствах.
      </Description>
      <Title>Особенности проведения независимой экспертизы</Title>
      <Description>
        Не нужно спешить вызывать независимых экспертов, ведь более явно следы
        происшествия проявляются после частичного высыхания. Восстановительные
        работы до приезда специалистов выполнять не следует. Действовать
        необходимо следующим образом:
      </Description>
      <Ol>
        <li>
          Позвонить в профессиональную организацию, согласовать время, сроки и
          стоимость проведения оценки;
        </li>
        <li>
          Пригласить виновников затопления путем отправки телеграммы с
          уведомлением о вручении, чтобы иметь доказательство, что обвиняемая
          сторона получила приглашение на осмотр квартиры;
        </li>
        <li>
          В назначенный день специалист приезжает по адресу, устанавливает
          реальную причину аварии, фиксирует повреждения, делает фотоотчет всех
          дефектов;
        </li>
        <li>
          По окончанию эксперт составляет Акт осмотра, заинтересованные
          участники подписывают документ;
        </li>
        <li>
          В течение нескольких дней оценщик определяет размер нанесенных убытков
          с учетом нужных ремонтных работ и стройматериалов;
        </li>
        <li>
          Заказчик в праве потребовать с виновника добровольное возмещение
          ущерба по итогам экспертизы, а в случае его отказа подать в суд для
          принудительного взыскания.
        </li>
      </Ol>
      <Description>
        По признанию вины судом виноватая сторона берет на себя обязательства по
        выплате не только ущерба за залив, но и расходы на независимую
        экспертизу и судебные издержки.
      </Description>
      <Title>Важность обращения к специалистам</Title>
      <Description>
        <i>
          Конечный результат зависит не только от правильности и быстроты
          действий пострадавших, но и от выбора организации, предоставляющей
          услуги по независимой экспертизе после залива. Только специалисты с
          большим опытом работы сумеют провести оценку в быстрые сроки с полным
          соблюдением норм и требований действующего законодательства.
        </i>
      </Description>
      <Description>
        <i>
          Обратившись в оценочную компанию АИС «ПЕРЕВОДЧИК», заказчик может
          рассчитывать на установление истиной причины затопления, реальную
          оценку причиненного ущерба, содействие при составлении необходимой
          документации для подачи иска, представление интересов клиента при
          судебных разбирательствах.
        </i>
      </Description>
      <Description>
        <i>
          Если вы затопили соседей снизу, но авария произошла по вине
          коммунальной службы или из-за некачественной сантехники, профессионалы
          сумеют отстоять ваши права в суде и добиться материального возмещения
          от реального виновника.
        </i>
      </Description>
    </div>
  );
};

export default BayExpertise;
