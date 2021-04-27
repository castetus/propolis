export const store = {
    listTextBlocks: {
      common: `Для подготовки договора мне понадобятся следующие документы и данные:
- паспорт заемщика (первая страница-разворот и страница с пропиской)
- телефон клиента
- почта клиента
- сумма ипотеки
- дата сделки
- номер кредитного договора
- что нужно страховать (жизнь, имущество, титул)
- место работы
- должность
`,
      life: `- рост/вес
`,
      estate: `- выписка из ЕГРН.
`,
      title: `Если требуется страхование Титула, то дополнительно потребуются следующие документы:
- отчет об оценке
- выписка из ЕГРН (не старше одного месяца)
- форма 7, форма 9 (не старше одного месяца)
- паспорта предыдущих собственников (все страницы)
- ДКП покупателя
- документ, по которому квартира перешла в собственность продавца (ДДУ/ДКП)
- если квартира приобреталась в браке, то согласие супруги/супруга на продажу
- если есть несовершеннолетние собственники, то справка из органов опеки
- если собственнику квартиры больше 60 лет, то справки ПНД и НД или водительское удостоверение
- фио, почта, телефон кредитного менеджера банка
`,
      long: `- дата окончания кредитного договора
- сумма остатка задолженности
- сроки действия предыдущего полиса страхования
- процентная ставка
- аннуитетный платеж`
    },
    sberRates: '{"18":{"male":{"sber":0.0038,"ingos":0,"vsk":0.0014},"female":{"sber":0.0031,"ingos":0,"vsk":0.0014}},"19":{"male":{"sber":0.0039,"ingos":0,"vsk":0.0015},"female":{"sber":0.00318,"ingos":0,"vsk":0.0014}},"20":{"male":{"sber":0.004,"ingos":0.001663,"vsk":0.0016},"female":{"sber":0.00326,"ingos":0.001223,"vsk":0.0014}},"21":{"male":{"sber":0.0041,"ingos":0.001701,"vsk":0.0018},"female":{"sber":0.00334,"ingos":0.001271,"vsk":0.0014}},"22":{"male":{"sber":0.0041,"ingos":0.00175,"vsk":0.0018},"female":{"sber":0.00342,"ingos":0.001317,"vsk":0.0014}},"23":{"male":{"sber":0.0042,"ingos":0.001801,"vsk":0.0018},"female":{"sber":0.0035,"ingos":0.001368,"vsk":0.0014}},"24":{"male":{"sber":0.0043,"ingos":0.001853,"vsk":0.002},"female":{"sber":0.00358,"ingos":0.00142,"vsk":0.0014}},"25":{"male":{"sber":0.0043,"ingos":0.001907,"vsk":0.002},"female":{"sber":0.00374,"ingos":0.001457,"vsk":0.0014}},"26":{"male":{"sber":0.0043,"ingos":0.001962,"vsk":0.002},"female":{"sber":0.00374,"ingos":0.001511,"vsk":0.0014}},"27":{"male":{"sber":0.0043,"ingos":0.002019,"vsk":0.0021},"female":{"sber":0.00374,"ingos":0.001548,"vsk":0.0015}},"28":{"male":{"sber":0.0043,"ingos":0.002078,"vsk":0.0021},"female":{"sber":0.00374,"ingos":0.001642,"vsk":0.0016}},"29":{"male":{"sber":0.0043,"ingos":0.002138,"vsk":0.0022},"female":{"sber":0.00374,"ingos":0.001725,"vsk":0.0016}},"30":{"male":{"sber":0.0044,"ingos":0.0022,"vsk":0.0023},"female":{"sber":0.00382,"ingos":0.001838,"vsk":0.0016}},"31":{"male":{"sber":0.0047,"ingos":0.002264,"vsk":0.0025},"female":{"sber":0.00382,"ingos":0.001917,"vsk":0.0017}},"32":{"male":{"sber":0.0049,"ingos":0.00233,"vsk":0.0026},"female":{"sber":0.00382,"ingos":0.001976,"vsk":0.0018}},"33":{"male":{"sber":0.0052,"ingos":0.002397,"vsk":0.0026},"female":{"sber":0.00382,"ingos":0.002082,"vsk":0.0018}},"34":{"male":{"sber":0.0054,"ingos":0.002467,"vsk":0.0029},"female":{"sber":0.00382,"ingos":0.002101,"vsk":0.0018}},"35":{"male":{"sber":0.0058,"ingos":0.002538,"vsk":0.003},"female":{"sber":0.00382,"ingos":0.002316,"vsk":0.002}},"36":{"male":{"sber":0.006,"ingos":0.002612,"vsk":0.0033},"female":{"sber":0.00407,"ingos":0.002455,"vsk":0.0022}},"37":{"male":{"sber":0.0064,"ingos":0.002688,"vsk":0.0034},"female":{"sber":0.00416,"ingos":0.00256,"vsk":0.0023}},"38":{"male":{"sber":0.0067,"ingos":0.002765,"vsk":0.0036},"female":{"sber":0.00424,"ingos":0.00263,"vsk":0.0024}},"39":{"male":{"sber":0.0072,"ingos":0.002846,"vsk":0.0038},"female":{"sber":0.00432,"ingos":0.002715,"vsk":0.0026}},"40":{"male":{"sber":0.0077,"ingos":0.002928,"vsk":0.004},"female":{"sber":0.00449,"ingos":0.002846,"vsk":0.0026}},"41":{"male":{"sber":0.0082,"ingos":0.003367,"vsk":0.0042},"female":{"sber":0.00457,"ingos":0.003148,"vsk":0.0028}},"42":{"male":{"sber":0.0087,"ingos":0.003603,"vsk":0.0045},"female":{"sber":0.00474,"ingos":0.003399,"vsk":0.003}},"43":{"male":{"sber":0.0093,"ingos":0.003855,"vsk":0.0047},"female":{"sber":0.0049,"ingos":0.003705,"vsk":0.0031}},"44":{"male":{"sber":0.01,"ingos":0.004125,"vsk":0.005},"female":{"sber":0.00499,"ingos":0.003825,"vsk":0.0034}},"45":{"male":{"sber":0.0108,"ingos":0.004414,"vsk":0.0052},"female":{"sber":0.00538,"ingos":0.004117,"vsk":0.0035}},"46":{"male":{"sber":0.0116,"ingos":0.004723,"vsk":0.0058},"female":{"sber":0.00585,"ingos":0.004423,"vsk":0.0038}},"47":{"male":{"sber":0.0124,"ingos":0.005054,"vsk":0.0062},"female":{"sber":0.00637,"ingos":0.004694,"vsk":0.0041}},"48":{"male":{"sber":0.013,"ingos":0.005407,"vsk":0.0068},"female":{"sber":0.00691,"ingos":0.004938,"vsk":0.0043}},"49":{"male":{"sber":0.0136,"ingos":0.005786,"vsk":0.0074},"female":{"sber":0.00751,"ingos":0.005383,"vsk":0.0046}},"50":{"male":{"sber":0.0152,"ingos":0.006191,"vsk":0.0081},"female":{"sber":0.00901,"ingos":0.005781,"vsk":0.005}},"51":{"male":{"sber":0.0165,"ingos":0.013404,"vsk":0.011},"female":{"sber":0.00996,"ingos":0.007453,"vsk":0.0067}},"52":{"male":{"sber":0.0177,"ingos":0.013481,"vsk":0.0119},"female":{"sber":0.01085,"ingos":0.007661,"vsk":0.0072}},"53":{"male":{"sber":0.0189,"ingos":0.014266,"vsk":0.013},"female":{"sber":0.0118,"ingos":0.008075,"vsk":0.0077}},"54":{"male":{"sber":0.0203,"ingos":0.015892,"vsk":0.0142},"female":{"sber":0.01282,"ingos":0.008865,"vsk":0.0084}},"55":{"male":{"sber":0.0217,"ingos":0.016625,"vsk":0.0154},"female":{"sber":0.0139,"ingos":0.009976,"vsk":0.0091}},"56":{"male":{"sber":0.0232,"ingos":0.017542,"vsk":0.0167},"female":{"sber":0,"ingos":0.011657,"vsk":0.0098}},"57":{"male":{"sber":0.0248,"ingos":0.019359,"vsk":0.0183},"female":{"sber":0,"ingos":0.012622,"vsk":0.0107}},"58":{"male":{"sber":0.0264,"ingos":0.019941,"vsk":0.02},"female":{"sber":0,"ingos":0.013489,"vsk":0.0116}},"59":{"male":{"sber":0.0282,"ingos":0.023804,"vsk":0.0219},"female":{"sber":0,"ingos":0.014357,"vsk":0.0128}},"60":{"male":{"sber":0.0301,"ingos":0.023821,"vsk":0.0227},"female":{"sber":0,"ingos":0.015098,"vsk":0.0132}},"61":{"male":{"sber":0,"ingos":0.025246,"vsk":0.0247},"female":{"sber":0,"ingos":0.01644,"vsk":0.0145}},"62":{"male":{"sber":0,"ingos":0.025796,"vsk":0.0265},"female":{"sber":0,"ingos":0.016736,"vsk":0.0156}},"63":{"male":{"sber":0,"ingos":0.028548,"vsk":0.0285},"female":{"sber":0,"ingos":0.018181,"vsk":0.0169}},"64":{"male":{"sber":0,"ingos":0.031301,"vsk":0.0305},"female":{"sber":0,"ingos":0.020505,"vsk":0.0181}},"65":{"male":{"sber":0,"ingos":0.032911,"vsk":0.0327},"female":{"sber":0,"ingos":0.021191,"vsk":0.0203}}}',
    banks: [
    {value: 19, label: `Сбербанк`, comission: 0.45},
    {value: 3, label: `ВТБ`, comission: 0.15},
    {value: 0, label: `АКБарс`, comission: 0.15},
    // {value: 1, label: `Бинбанк`, comission: 0},
    // {value: 2, label: `Возрождени`, comission: 0.15},
    {value: 4, label: `Газпром банк`, comission: 0.2},
    {value: 5, label: `Глобэксбанк`, comission: 0.2},
    // {value: 6, label: `Дальневосточный банк`, comission: 0.15},
    {value: 7, label: `ДОМ.РФ`, comission: 0.05},
    {value: 8, label: `Зенит`, comission: 0.15},
    // {value: 9, label: `Интеза`, comission: 0.1},
    // {value: 10, label: `КредитЕвропаБанк`, comission: 0.15},
    // {value: 11, label: `Металлинвестбанк`, comission: 0.15},
    // {value: 12, label: `Московский Индустриальный Банк (Минбанк)`, comission: 0.15},
    {value: 13, label: `Открытие`, comission: 0},
    {value: 14, label: `ПромСвязьБанк`, comission: 0.15},
    {value: 15, label: `Райффайзен`, comission: 0.15},
    // {value: 16, label: `Росбанк (Дельта Кредит)`, comission: 0.15},
    // {value: 17, label: `РостФинанс`, comission: 0},
    {value: 18, label: `РСХБ`, comission: 0.15},
    {value: 27, label: `Санкт-Петербург`, comission: 0.2},
    {value: 20, label: `Связь банк`, comission: 0.2},
    {value: 21, label: `Северный Морской Путь (СМП)`, comission: 0.2},
    // {value: 22, label: `Союз`, comission: 0},
    // {value: 23, label: `ТрансКапиталБанк`, comission: 0.15},
    {value: 24, label: `Уралсиб`, comission: 0.15},
    // {value: 25, label: `Уральский Банк реконструкции и развития (УБРиР)`, comission: 0.15},
    {value: 26, label: `Юникредит`, comission: 0.15},
    ],
    insCompanies: [
      {
        id: 1,
        name: 'ingos',
        label: 'Ингосстрах',
        banks: {
          19: {
            life: 'ingossber',
            estate: 0.0015,
            title: 0.0018
          },
          0: {
            life: 'ingosstandart',
            estate: 0.0012,
            title: 0.0018
          },
          3: {
            life: 'ingosstandart',
            estate: 0.0012,
            title: 0.0018
          },
          4: {
            life: 'ingosstandart',
            estate: 0.0012,
            title: 0.0018
          },
          5: {
            life: 'ingosdomrf',
            estate: 0.0014,
            title: 0.002
          },
          7: {
            life: 'ingosdomrf',
            estate: 0.0015,
            title: 0.002
          },
          8: {
            life: 'ingosstandart',
            estate: 0.0013,
            title: 0.0018
          },
          13: {
            life: 'ingosotkr',
            estate: 0.0015,
            title: 0.002
          },
          14: {
            life: 'ingosstandart',
            estate: 0.0012,
            title: 0.0018
          },
          15: {
            life: 'ingosstandart',
            estate: 0.0012,
            title: 0.0018
          },
          18: {
            life: 'ingosrshb',
            estate: 0.0017,
            title: 0.002
          },
          20: {
            life: 'ingosdomrf',
            estate: 0.0014,
            title: 0.002
          },
          21: {
            life: 'ingosstandart',
            estate: 0.0012,
            title: 0.0018
          },
          24: {
            life: 'ingosstandart',
            estate: 0.0014,
            title: 0.002
          },
          26: {
            life: 'ingosstandart',
            estate: 0.0012,
            title: 0.0018
          },
          27: {
            life: 'ingosstandart',
            estate: 0.0012,
            title: 0.0018
          },
        }
      },
      {
        id: 2,
        name: 'vsk',
        label: 'ВСК',
        banks: {
          19: {
            life: 'vsksber',
            estate: 0.0011,
            title: 0.0018
          },
        }
      }
    ],
    rates: {
      ingossber: {
        20: {male: 0.0015, female: 0.0011}, 21: {male: 0.0015, female: 0.0011}, 22: {male: 0.0015, female: 0.0011}, 23: {male: 0.0015, female: 0.0011}, 24: {male: 0.0015, female: 0.0011}, 25: {male: 0.0016, female: 0.0011}, 26: {male: 0.0017, female: 0.0011}, 27: {male: 0.0018, female: 0.0011}, 28: {male: 0.0019, female: 0.0011}, 29: {male: 0.0020, female: 0.0011}, 30: {male: 0.0021, female: 0.0012}, 31: {male: 0.0022, female: 0.0013}, 32: {male: 0.0023, female: 0.0014}, 33: {male: 0.0024, female: 0.0015}, 34: {male: 0.0025, female: 0.0016}, 35: {male: 0.0026, female: 0.0017}, 36: {male: 0.0027, female: 0.0018}, 37: {male: 0.0028, female: 0.0019}, 38: {male: 0.0028, female: 0.0020}, 39: {male: 0.0028, female: 0.0021}, 40: {male: 0.0033, female: 0.0022}, 41: {male: 0.0035, female: 0.0023}, 42: {male: 0.0037, female: 0.0025}, 43: {male: 0.0040, female: 0.0026}, 44: {male: 0.0043, female: 0.0028}, 45: {male: 0.0045, female: 0.0031}, 46: {male: 0.0050, female: 0.0035}, 47: {male: 0.0055, female: 0.0037}, 48: {male: 0.0055, female: 0.0040}, 49: {male: 0.0055, female: 0.0045}, 50: {male: 0.0075, female: 0.0050}, 51: {male: 0.0085, female: 0.0060}, 52: {male: 0.0095, female: 0.0065}, 53: {male: 0.0100, female: 0.0070}, 54: {male: 0.0100, female: 0.0070}, 55: {male: 0.0130, female: 0.0080}, 56: {male: 0.0140, female: 0.0085}, 57: {male: 0.0150, female: 0.0090}, 58: {male: 0.0160, female: 0.0100}, 59: {male: 0.0160, female: 0.0120}, 60: {male: 0.0180, female: 0.0125}, 61: {male: 0.0190, female: 0.0130}, 62: {male: 0.0200, female: 0.0140}, 63: {male: 0.0210, female: 0.0150}, 64: {male: 0.0220, female: 0.0160}, 65: {male: 0.0220, female: 0.0180}, 66: {male: 0.0220, female: 0.0190}, 67: {male: 0.0220, female: 0.0200}, 68: {male: 0.0220, female: 0.0210}, 69: {male: 0.0220, female: 0.0220}, 70: {male: 0.0220, female: 0.0220}, 71: {male: 0.0220, female: 0.0220}, 72: {male: 0.0220, female: 0.0220}, 73: {male: 0.0220, female: 0.0220}, 74: {male: 0.0220, female: 0.0220}, 75: {male: 0.0220, female: 0.0220},
      },
      ingosstandart: {
        20: {male: 0.0015, female: 0.0011}, 21: {male: 0.0015, female: 0.0011}, 22: {male: 0.0015, female: 0.0011}, 23: {male: 0.0015, female: 0.0011}, 24: {male: 0.0015, female: 0.0011}, 25: {male: 0.0016, female: 0.0011}, 26: {male: 0.0017, female: 0.0011}, 27: {male: 0.0018, female: 0.0011}, 28: {male: 0.0019, female: 0.0011}, 29: {male: 0.0020, female: 0.0011}, 30: {male: 0.0021, female: 0.0012}, 31: {male: 0.0022, female: 0.0013}, 32: {male: 0.0023, female: 0.0014}, 33: {male: 0.0024, female: 0.0015}, 34: {male: 0.0025, female: 0.0016}, 35: {male: 0.0026, female: 0.0017}, 36: {male: 0.0027, female: 0.0018}, 37: {male: 0.0028, female: 0.0019}, 38: {male: 0.0028, female: 0.0020}, 39: {male: 0.0028, female: 0.0021}, 40: {male: 0.0033, female: 0.0022}, 41: {male: 0.0035, female: 0.0023}, 42: {male: 0.0037, female: 0.0025}, 43: {male: 0.0040, female: 0.0026}, 44: {male: 0.0043, female: 0.0028}, 45: {male: 0.0045, female: 0.0031}, 46: {male: 0.0050, female: 0.0035}, 47: {male: 0.0055, female: 0.0037}, 48: {male: 0.0055, female: 0.0040}, 49: {male: 0.0055, female: 0.0045}, 50: {male: 0.0075, female: 0.0050}, 51: {male: 0.0085, female: 0.0060}, 52: {male: 0.0095, female: 0.0065}, 53: {male: 0.0100, female: 0.0070}, 54: {male: 0.0100, female: 0.0070}, 55: {male: 0.0130, female: 0.0080}
      },
      ingosotkr: {
        18: {male: 0.0040, female: 0.0032}, 19: {male: 0.0040, female: 0.0032}, 20: {male: 0.0040, female: 0.0032}, 21: {male: 0.0040, female: 0.0032}, 22: {male: 0.0041, female: 0.0032}, 23: {male: 0.0041, female: 0.0032}, 24: {male: 0.0041, female: 0.0034}, 25: {male: 0.0041, female: 0.0034}, 26: {male: 0.0041, female: 0.0034}, 27: {male: 0.0041, female: 0.0034}, 28: {male: 0.0041, female: 0.0034}, 29: {male: 0.0042, female: 0.0034}, 30: {male: 0.0044, female: 0.0038}, 31: {male: 0.0044, female: 0.0038}, 32: {male: 0.0044, female: 0.0038}, 33: {male: 0.0044, female: 0.0038}, 34: {male: 0.0045, female: 0.0040}, 35: {male: 0.0048, female: 0.0043}, 36: {male: 0.0051, female: 0.0046}, 37: {male: 0.0054, female: 0.0047}, 38: {male: 0.0057, female: 0.0047}, 39: {male: 0.0056, female: 0.0047}, 40: {male: 0.0060, female: 0.0051}, 41: {male: 0.0063, female: 0.0051}, 42: {male: 0.0066, female: 0.0051}, 43: {male: 0.0070, female: 0.0058}, 44: {male: 0.0075, female: 0.0061}, 45: {male: 0.0081, female: 0.0066}, 46: {male: 0.0087, female: 0.0069}, 47: {male: 0.0095, female: 0.0075}, 48: {male: 0.0102, female: 0.0084}, 49: {male: 0.0109, female: 0.0090}, 50: {male: 0.0119, female: 0.0100}, 51: {male: 0.0129, female: 0.0106}, 52: {male: 0.0137, female: 0.0119}, 53: {male: 0.0145, female: 0.0133}, 54: {male: 0.0153, female: 0.0146}, 55: {male: 0.0183, female: 0.0162}
      },
      ingosrshb: {
        20: {male: 0.0022, female: 0.0017}, 21: {male: 0.0023, female: 0.0017}, 22: {male: 0.0024, female: 0.0018}, 23: {male: 0.0024, female: 0.0018}, 24: {male: 0.0025, female: 0.0019}, 25: {male: 0.0026, female: 0.0020}, 26: {male: 0.0026, female: 0.0018}, 27: {male: 0.0027, female: 0.0019}, 28: {male: 0.0028, female: 0.0020}, 29: {male: 0.0029, female: 0.0021}, 30: {male: 0.0030, female: 0.0022}, 31: {male: 0.0034, female: 0.0020}, 32: {male: 0.0035, female: 0.0021}, 33: {male: 0.0036, female: 0.0022}, 34: {male: 0.0037, female: 0.0022}, 35: {male: 0.0038, female: 0.0024}, 36: {male: 0.0039, female: 0.0028}, 37: {male: 0.0040, female: 0.0029}, 38: {male: 0.0041, female: 0.0030}, 39: {male: 0.0043, female: 0.0031}, 40: {male: 0.0044, female: 0.0032}, 41: {male: 0.0051, female: 0.0033}, 42: {male: 0.0054, female: 0.0036}, 43: {male: 0.0058, female: 0.0039}, 44: {male: 0.0062, female: 0.0040}, 45: {male: 0.0066, female: 0.0043}, 46: {male: 0.0071, female: 0.0050}, 47: {male: 0.0076, female: 0.0053}, 48: {male: 0.0081, female: 0.0056}, 49: {male: 0.0087, female: 0.0061}, 50: {male: 0.0093, female: 0.0065}, 51: {male: 0.0201, female: 0.0112}, 52: {male: 0.0202, female: 0.0115}, 53: {male: 0.0214, female: 0.0121}, 54: {male: 0.0238, female: 0.0133}, 55: {male: 0.0249, female: 0.0150}, 56: {male: 0.0263, female: 0.0175}, 57: {male: 0.0290, female: 0.0189}, 58: {male: 0.0299, female: 0.0202}, 59: {male: 0.0357, female: 0.0215}, 60: {male: 0.0357, female: 0.0226}, 61: {male: 0.0379, female: 0.0247}, 62: {male: 0.0387, female: 0.0251}, 63: {male: 0.0428, female: 0.0273}, 64: {male: 0.0470, female: 0.0308}, 65: {male: 0.0494, female: 0.0318}
      },
      ingosdomrf: {
        21: {male: 0.0026, female: 0.0020}, 22: {male: 0.0027, female: 0.0020}, 23: {male: 0.0027, female: 0.0020}, 24: {male: 0.0030, female: 0.0021}, 25: {male: 0.0030, female: 0.0021}, 26: {male: 0.0030, female: 0.0021}, 27: {male: 0.0031, female: 0.0023}, 28: {male: 0.0031, female: 0.0024}, 29: {male: 0.0032, female: 0.0024}, 30: {male: 0.0035, female: 0.0024}, 31: {male: 0.0037, female: 0.0025}, 32: {male: 0.0038, female: 0.0026}, 33: {male: 0.0039, female: 0.0027}, 34: {male: 0.0043, female: 0.0027}, 35: {male: 0.0044, female: 0.0030}, 36: {male: 0.0048, female: 0.0032}, 37: {male: 0.0051, female: 0.0035}, 38: {male: 0.0054, female: 0.0036}, 39: {male: 0.0057, female: 0.0038}, 40: {male: 0.0059, female: 0.0039}, 41: {male: 0.0063, female: 0.0042}, 42: {male: 0.0066, female: 0.0044}, 43: {male: 0.0070, female: 0.0047}, 44: {male: 0.0074, female: 0.0050}, 45: {male: 0.0077, female: 0.0053}, 46: {male: 0.0086, female: 0.0056}, 47: {male: 0.0092, female: 0.0060}, 48: {male: 0.0101, female: 0.0065}, 49: {male: 0.0109, female: 0.0069}, 50: {male: 0.0120, female: 0.0074}, 51: {male: 0.0131, female: 0.0080}, 52: {male: 0.0142, female: 0.0086}, 53: {male: 0.0154, female: 0.0092}, 54: {male: 0.0169, female: 0.0100}, 55: {male: 0.0183, female: 0.0108}
      },
      vsksber: {
        18: {male: 0.0014, female: 0.0014}, 19: {male: 0.0015, female: 0.0014}, 20: {male: 0.0016, female: 0.0014}, 21: {male: 0.0018, female: 0.0014}, 22: {male: 0.0018, female: 0.0014}, 23: {male: 0.0018, female: 0.0014}, 24: {male: 0.0020, female: 0.0014}, 25: {male: 0.0020, female: 0.0014}, 26: {male: 0.0020, female: 0.0014}, 27: {male: 0.0021, female: 0.0015}, 28: {male: 0.0021, female: 0.0016}, 29: {male: 0.0022, female: 0.0016}, 30: {male: 0.0023, female: 0.0016}, 31: {male: 0.0025, female: 0.0017}, 32: {male: 0.0026, female: 0.0018}, 33: {male: 0.0026, female: 0.0018}, 34: {male: 0.0029, female: 0.0018}, 35: {male: 0.0030, female: 0.0020}, 36: {male: 0.0033, female: 0.0022}, 37: {male: 0.0034, female: 0.0023}, 38: {male: 0.0036, female: 0.0024}, 39: {male: 0.0038, female: 0.0026}, 40: {male: 0.0040, female: 0.0026}, 41: {male: 0.0042, female: 0.0028}, 42: {male: 0.0045, female: 0.0030}, 43: {male: 0.0047, female: 0.0031}, 44: {male: 0.0050, female: 0.0034}, 45: {male: 0.0052, female: 0.0035}, 46: {male: 0.0058, female: 0.0038}, 47: {male: 0.0062, female: 0.0041}, 48: {male: 0.0068, female: 0.0043}, 49: {male: 0.0074, female: 0.0046}, 50: {male: 0.0081, female: 0.0050}, 51: {male: 0.0110, female: 0.0067}, 52: {male: 0.0119, female: 0.0072}, 53: {male: 0.0130, female: 0.0077}, 54: {male: 0.0142, female: 0.0084}, 55: {male: 0.0154, female: 0.0091}, 56: {male: 0.0167, female: 0.0098}, 57: {male: 0.0183, female: 0.0107}, 58: {male: 0.0200, female: 0.0116}, 59: {male: 0.0219, female: 0.0128}, 60: {male: 0.0227, female: 0.0132}, 61: {male: 0.0247, female: 0.0145}, 62: {male: 0.0265, female: 0.0156}, 63: {male: 0.0285, female: 0.0169}, 64: {male: 0.0305, female: 0.0181}, 65: {male: 0.0327, female: 0.0203}
      }
    }    
  }