export const state = {
  esiStatus: [],
  tagFilter: null,
  statusFilter: null
}

export const mutations = {
  set_esi_status (state, esiStatus) {
    state.esiStatus = esiStatus
  },
  set_filter (state, filter) {
    if (state.tagFilter !== filter) {
      state.tagFilter = filter
    } else {
      state.tagFilter = null
    }
  },
  set_status_filter (state, filter) {
    if (state.statusFilter !== filter) {
      state.statusFilter = filter
    } else {
      state.statusFilter = null
    }
  }
}

export const getters = {
  getTagFilter: state => {
    return state.tagFilter
  },
  getStatusFilter: state => {
    return state.statusFilter
  },
  getEsiStatus: state => {
    return state.esiStatus
  },
  getEsiStatusFiltered: state => {
    let _esiStatus = state.esiStatus

    if (state.tagFilter !== null) {
      _esiStatus = _esiStatus.filter(status => {
        return status.tags.indexOf(state.tagFilter) !== -1
      })
    }

    if (state.statusFilter !== null) {
      _esiStatus = _esiStatus.filter(status => {
        return status.status === state.statusFilter
      })
    }

    return _esiStatus
  },
  getGeneralStatus: (state, getters) => {
    return getters.getEsiStatus.map(status => {
      return status.status
    })
  }
}
