<template lang="pug">
  .block_white#faq
    .container 
      h2.heading.heading_green частые вопросы
      .faq 
        .faq__item(v-for="item in items" :key="item.id")
          .faq__title(@click="activate(item.id)" :class="{faq__title_active: (item.id == activeIndex)}") {{item.title}}
          .faq__content(v-html="item.html" :class="{faq__content_active: (item.id == activeIndex)}")
      a.btn.btn_green.btn_centered.btn_popup(href="#big-form") заказать полис
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      activeIndex: null,
      items: [
        {
          id: 1,
          title: 'Ипотечное страхование – что это такое?',
          html: '<p>Ипотечное страхование – это возможность обеспечения возвратности выданного банком кредита. Заемщику страхование недвижимости в ипотечной сделке дает гарантию в том, что взаимоотношения с банком по кредитным обязательствам будут урегулированы в случае возникновения форс-мажорных обстоятельств. В ипотечную страховку входят страхование жилья от рисков физической гибели или повреждения, страхование жизни и трудоспособности заемщика и созаемщиков, а также страхование риска потери права собственности на недвижимое имущество (титульное страхование), при этом банк имеет право требовать от заемщика  страхования двух или трех видов в рамках одного полиса или только одного вида: имущества — обязательно для сделки на вторичном рынке в силу ФЗ «Об ипотеке»; жизни — обязательно при приобретении квартиры на этапе строительства.</p>',
        },
        {
          id: 2,
          title: 'Страховой полис для ипотеки: когда он нужен?',
          html: '<p>Страхование при ипотечном кредитовании – это обязательное условие получения займа от банка, так как страховой полис гарантирует банку возврат денежных средств в случае возникновения чрезвычайных обстоятельств в жизни заемщика. Страхование жилья при ипотеке покрывает не всю стоимость приобретаемой недвижимости, а только ту часть, которую покупатель берет взаймы у банка. Например, если вы выплатили часть суммы собственными накопленными средствами, то полис оформляется только на остаток долга.</p>'
        },
        {
          id: 3,
          title: 'Зачем необходимо страховать жизнь заемщика при оформлении ипотеки?',
          html: '<p>Страхование жизни при ипотеке не всегда является требованиям банка, и обычно это требуется при покупке строящегося жилья: ипотека оформляется на долгий срок (10-15 лет), и высок риск того, что заемщик может заболеть, получить травму и потерять трудоспособность, что не позволит ему погасить долг перед банком в полном объеме. Именно для защиты имущественных интересов как заемщика, так и банка жизнь и имущество страхуются в ипотечной сделке, при этом во время болезни заемщика страховая компания компенсирует часть ипотечного платежа,   пропорциональную периоду нахождения на больничном, а при полной потере трудоспособности или смерти - весь остаток по ипотеке.</p>'
        },
        {
          id: 4,
          title: 'Сколько стоит страхование жизни?',
          html: '<p>Стоимость страхования жизни при ипотеке существенно отличается для разных категорий граждан, при этом обязательно учитываются возраст, пол, наличие хронических заболеваний, степень здоровья клиента, место его работы, финансовое состояние и другие факторы.</p>'
        },
        {
          id: 5,
          title: 'Что дает страхование жизни заемщика?',
          html: '<p>Если заемщик теряет трудоспособность или преждевременно умирает, ипотечный кредит обязана выплачивать его семья, что часто ставит наследников заемщика в сложное положение, вплоть до утери собственности. именно поэтому так важна программа страхования жизни – она предусматривает выплаты банку-кредитору со стороны стразовой компании в случае потери трудоспособности или смерти заемщика. Это позволяет семье заемщика в случае наступления страховой ситуации сохранить право владения приобретенным жильем. Рассчитайте стоимость с помощью <a href="#calculator">онлайн-калькулятора</a>!</p>'
        },
        {
          id: 6,
          title: 'Для чего необходимо страховать недвижимость при ипотеке?',
          html: '<p>Страхование квартиры по ипотеке дает возможность заемщику и банку обезопасить риски при покупке новой недвижимости. Оформить полис страхования недвижимости легко – просто заполните <a href="#big-form">форму</a> на нашем сайте!</p>'
        },
        {
          id: 7,
          title: 'Каков срок действия договора ипотечного страхования?',
          html: '<p>Договор ипотечного страхования обычно заключается на один год либо на весь срок действия кредитного договора с ежегодной пролонгацией. Срок действия полиса при ипотеке определяется требованиями кредитора, и обычно равен полному сроку действия кредитного ипотечного договора.</p>'
        },
        {
          id: 8,
          title: 'До какого момента обязательно наличие действующего полиса страхования жилья при ипотеке?',
          html: '<p>Наличие действующего полиса страхования жилья обязательно до полного погашения кредита, выданного банком.</p>'
        },
        {
          id: 9,
          title: 'Обязательно ли приезжать в офис компании для оформления полиса страхования жилья при ипотеке?',
          html: '<p>Возможны варианты: при первичных сделках в банке договор страхования может быть согласован вами и сотрудником страховщика дистанционно через электронные средства связи либо при содействии сотрудников банка, выдающего кредит, либо с помощью лица, представляющего интересы клиента (риелтора). При необходимости представитель страховой компании присутствует на сделке в банке при подписании. В большинстве случаев при определенных параметрах объекта страхования и для отдельных кредитных организаций полис может быть оформлен через официальный сайт компании в виде электронного документа.</p>'
        },
        {
          id: 10,
          title: 'Где можно получить подтверждение оплаты для банка?',
          html: '<p>На вашу электронную почту придет копия чека вместе с оригиналом электронного страхового полиса.</p>'
        },
        {
          id: 11,
          title: 'Как и где можно оплатить выставленный счет?',
          html: '<p>Выставленный счет можно оплатить онлайн на сайте страховой компании (по ссылке из пришедшего на вашу почту письма), а также в любом удобном для застрахованного банке или через платежные системы Western Union и Кибер Деньги (Почта России).</p>'
        },
        {
          id: 12,
          title: 'Что такое электронный полис?',
          html: '<p>Электронный полис – это наиболее современный вид полиса, полностью согласованный с банками, в котором имеются цифровая печать и цифровая подпись. Для того, чтобы убедиться в подлинности цифрового полиса, каждый заемщик может зайти на сайт страховой компании или позвонить в страховую компанию, назвать номер полиса и получить от работника страховой компании подтверждение наличия полиса на имя заемщика.</p>'
        },
        {
          id: 13,
          title: 'Сообщает ли страховая в банк, что у меня есть полис?',
          html: '<p>Нет, вы сами или ваш представитель можете предоставить скан полиса в Банк различными способами: через личный кабинет в банке, через систему Дом Клик или отправкой на почту вашему личному менеджеру.</p>'
        },
      ],

    }
  },
  methods: {
    activate(id){
      this.activeIndex = id
    }
  }
}
</script>

<style lang="scss">
.faq {
  width: 100%;
  margin-bottom: 40px;
  &__item {
    font-size: 12px;
    &:last-child {
      border-bottom: 1px solid $color-light-grey;
    }
    @media screen and (min-width: $desktop) {
      font-size: 14px;
    }
  }
  &__title {
    cursor: pointer;
    position: relative;
    padding: 25px 40px 26px 31px;
    border: 1px solid $color-light-grey;
    border-bottom: none;
    font-weight: 600;
    color: $color-orange;
    &:after {
      content: "";
      position: absolute;
      top: 45%;
      right: 30px;
      background: url("~@/assets/img/icons/arrow_down.svg") center no-repeat;
      background-size: contain;
      width: 11px;
      height: 6.5px;
    }
    &_active {
      background-color: $color-orange;
      color: #fff;
      &:after {
        background: url("~@/assets/img/icons/arrow_up.svg") center no-repeat;
        background-size: contain;
      }
    }
  }
  &__content {
    display: none;
    padding: 25px 31px;
    background-color: $color-light-grey;
    &_active {
      display: block;
    }
  }
}
</style>