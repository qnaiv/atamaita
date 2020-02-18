export const state = () => ({
  list: []
})

export const mutations = {
  add(state, record) {
    state.list.push({
      id: record.onsetDate,
      onsetDate: record.onsetDate,
      onsetTime: record.onsetTime,
      headacheType: record.headacheType,
      impact: record.impact,
      duration: record.duration,
      lastAction: record.lastAction,
      prodrome: record.prodrome,
      actionForTreatment: record.actionForTreatment,
      remarks: record.remarks
    })
  },
  update(state, record) {
    let idx = state.list.find(r => r.id == record.id)
    console.log(idx);
    
    state.list.splice(idx, 1, record)
  },
  remove(state, { record }) {
    state.list.splice(state.list.indexOf(record), 1)
  }
}
