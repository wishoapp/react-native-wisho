async function fetchBranchesByBrandId(brandId) {
    const response = await fetch(
        'https://dev.penelope.wishoapp.com/api/wisho-sdk/' + brandId + '/branches',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
  
    return await response.json();
};

async function fetchAvailableVoximplantService() {
    const response = await fetch(
      'https://dev.penelope.wishoapp.com/api/wisho-sdk/service-accounts/available',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      },
    );

    return await response.json();
  }

 async function goToQueue(brandId, userName) {
    const response = await fetch(
      'https://dev.penelope.wishoapp.com/api/wisho-sdk/queue/bind',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand_id: brandId,
          user_name: userName,
          source_id: 3,
        })
      },
    );

    return await response.json();
  }

 async function fetchQueueState(branchId, queueStateId) {
    const response = await fetch(
      'https://dev.penelope.wishoapp.com/api/queue/current-state',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'GAIA-TOKEN': 'abc'
        },
        body: JSON.stringify({
          branch_id: branchId,
          state_id: queueStateId,
        })
      },
    );

    return await response.json();
  };

 async function quiteFromQueue(branchId, stateId) {
    const response = await fetch(
      'https://dev.penelope.wishoapp.com/api/wisho-sdk/queue/quit',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          branch_id: branchId,
          state_id: stateId,
        })
      },
    );

    return await response.json();
  };

module.exports = {
    fetchBranchesByBrandId,
    fetchAvailableVoximplantService,
    goToQueue,
    fetchQueueState,
    quiteFromQueue
}