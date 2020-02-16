export const state = () => ({
  list: []
})

export const mutations = {
  add(state, record) {
    state.list.push({
      id: record.datetime.getTime(),
      datetime: record.datetime,
      headacheType: record.headacheType,
      headacheDuration: record.duration,
      lastAction: record.lastAction,
      prodrome: record.prodrome,
      actionForTreatment: record.actionForTreatment
    })
  },
  update(state, record) {
    let idx = state.list.find(r => r.id === record.id)
    state.list.splice(idx, 1, record)
  },
  remove(state, { record }) {
    state.list.splice(state.list.indexOf(record), 1)
  }
}
