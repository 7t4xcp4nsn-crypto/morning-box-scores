async function getGames() {
  const res = await fetch(
    "https://statsapi.mlb.com/api/v1/schedule?sportId=1",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data.dates?.[0]?.games || [];
}

export default async function Home() {
  const games = await getGames();

  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: 12,
      }}
    >
      <header style={{ marginBottom: 20 }}>
        <h1>⚾ Morning Box Scores</h1>
        <p style={{ color: "#666" }}>
          Daily MLB scoreboard
        </p>
      </header>

      {games.map((game: any) => (
        <div
          key={game.gamePk}
          style={{
            background: "white",
            padding: 12,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <strong>
              {game.teams.away.team.name}
            </strong>

            <span>
              {game.teams.away.score ?? 0}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <strong>
              {game.teams.home.team.name}
            </strong>

            <span>
              {game.teams.home.score ?? 0}
            </span>
          </div>
        </div>
      ))}
    </main>
  );
}
