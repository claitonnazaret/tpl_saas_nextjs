const fetchDashboard = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return res.json()
}

export { fetchDashboard }
