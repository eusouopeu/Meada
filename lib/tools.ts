export const toolsList = (tool: string) => {

  switch (tool) {
    case 'ValoresVisaoeMissao':
      return {
        image: '...',
        title: 'Valores, Visão e Missão',
        content: '...',
        references: '...',
        next: 'MatrizSPOT',
      }
    case 'MatrizSPOT':
      return {
        image: ' ... ',
        title: 'Matriz SPOT',
        content: '...',
        references: '...',
        next: 'BalancedScoreCard',
      }
    case 'BalancedScoreCard':
        return {
          image: '...',
          title: 'Balanced ScoreCard (BSC)',
          content: '...',
          references: '...',
          next: 'OKRs',
        }
      case 'OKRs':
        return {
          image: '...',
          title: 'Objectives and Key Results (OKRs)',
          content: '...',
          references: '...',
          next: 'MonitoramentoeGestao',
        }
      case 'MonitoramentoeGestao':
        return {
          image: '...',
          title: 'Monitoramento e Gestão',
          content: '...',
          references: '...',
          next: null,
        }
      }
  }