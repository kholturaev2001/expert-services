import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/expertise/accounting_expert.jpeg";
import Description from "../../../components/Typography/Description";
import Title2 from "../../../components/Typography/Title2";
import Title from "../../../components/Typography/Title";
import Ul from "../../../components/Typography/Ul";
import Attention from "../../../components/Attention";

const AccountingExpert = () => {
  return (
    <div>
<HeadBreadcrumb
        items={[
          {
            title: 'Главная'
          },
          {
            title: "Экспертиза",
          },
          {
            title: "Бухгалтерская",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        deadline="от 10 дней"
        price={50000}
        title="Бухгалтерская экспертиза"
      />
      <Description>
        Бухгалтерская экспертиза стала крайне актуальной в условиях
        экономического развития и роста фирм, предприятий и корпораций: число
        хозяйствующих субъектов увеличивается, меняются и расширяются формы
        собственности, и вместе с этим растет и финансовый оборот, отражаемый
        бухгалтерией. Поскольку всем известно, что от состояния бухучета зависит
        успех компании на рынке экономики, анализ документов путем проведения
        специальной экспертизы зачастую становится необходимостью. При этом,
        бухгалтерская экспертиза не только помогает определить правильность
        ведения бухгалтерского учета при проверке со стороны налоговых органов
        или аудита, но также может явиться доказательством при расследовании
        правонарушений в сфере экономики.
      </Description>
      <Attention desc='Несудебной экспертиза считается тогда, когда она назначается по
        инициативе руководителя компании или адвоката. Если же она проводится по
        инициативе суда, следователя или прокурора, тогда экспертиза будет
        считаться судебно-бухгалтерской.' />
      <Description>
        Первостепенной целью проведения рассматриваемой экспертизы выступает
        оценка фактического финансового положения компании, обнаружение ошибок,
        допущенных в процессе ведения бухучета и осуществления финансовых
        операций, а также профилактика вероятных нарушений в финансовых вопросах
        организации.
      </Description>
      <Title2>Объекты экспертизы</Title2>
      <Ul>
        <li>текущие финансовые документы, бух. отчетность;</li>
        <li>
          черновые записи бухгалтерии (в сравнении их с официальной отчетностью
          компании);
        </li>
        <li>счетные регистры, сводная информация по инвентаризации;</li>
        <li>
          материалы, полученные по результатам ревизий, аудиторских и налоговых
          проверок;
        </li>
        <li>материалы судебных дел;</li>
        <li>различные неофициальные документы и т.д.</li>
      </Ul>
      <Description>
        Экспертиза может проводиться в связи с возбуждением корпоративных
        споров, по делам, связанным с мошенничеством, изготовлением, хранением,
        перевозкой или сбытом поддельных денег, нецелевым расходованием
        бюджетных средств, "отмыванием" денег и пр.
      </Description>
      <Description>
        <b>Вопросы, стоящие перед экспертом</b>
      </Description>
      <Ul>
        <li>
          соответствуют ли операции, проводимые бухгалтерией компании, правилам
          оформления? Если нет - какие нарушения были допущены?
        </li>
        <li>
          имеются ли у компании материальные ценности и денежные средства?
        </li>
        <li>
          являются ли приходы и списания денежных средств со счетов организации
          обоснованными?
        </li>
        <li>по каким причинам образовались финансовые недостачи?</li>
        <li>каков объем материального ущерба?</li>
        <li>кто ответственный за причинение ущерба?</li>
        <li>в каком состоянии находится бухгалтерский учет организации?</li>
        <li>каковы причины расхождений в бухгалтерской отчетности?</li>
      </Ul>
      <Description>
        Выше приведен не исчерпывающий список вопросов. В процессе проведения
        экспертизы, исходя из ситуации, могут возникнуть иные вопросы. При
        необходимости постановки новых вопросов, следует обратиться с ними к
        эксперту до момента начала проведения экспертизы.
      </Description>
      <Attention desc='Предотвратить большинство проблем, связанных с состоянием бухгалтерских
        документов компании гораздо проще, чем разрешать уже возникшие спорные
        ситуации путем обращения в суд и разбирательств с кредиторами и
        представителями налоговых органов.' />
      <Description>
        Являясь одной из разновидностей экономических экспертиз, бухгалтерская
        напрямую связана со смежными видами экспертиз: налоговой,
        финансово-экономической и кредитной. Ввиду схожего предмета
        исследования, на практике зачастую требуется проведение комплексной
        экспертизы, содержащего все перечисленные виды. По этой причине для
        получения максимально точных результатов необходимо обращаться к
        специалистам, имеющим высокую квалификацию в области проведения всех
        разновидностей экономических экспертиз. ООО АИС «ПЕРЕВОДЧИК»
        предлагает услуги профессиональных экспертов, обладающих опытом
        сотрудничества с судами, государственными органами, коммерческими
        организациями и частными лицами. По этой причине мы можем гарантировать
        Вам качественное оказание услуг.
      </Description>
    </div>
  );
};

export default AccountingExpert;
