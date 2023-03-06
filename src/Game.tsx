import { useGameData } from "./game-data-provider/GameDataProvider"
import { Title, Grid, Button, Loader, Group } from "@mantine/core"
import { PlayerCard } from "./components/PlayerCard"
import { useLogFilePath } from "./configStore"

export const Game: React.FC = () => {
    const gameData = useGameData()
    const logFilePath = useLogFilePath()
    return (
        <>
            {logFilePath !== undefined ? (
                <>
                    {gameData && gameData.gameData.map.length > 0 ? (
                        <>
                            <Grid gutter={0}>
                                <Grid.Col span="auto" pt={40}>
                                    {gameData.gameData.left.players.map(
                                        (player, index) => (
                                            <PlayerCard
                                                key={
                                                    player.relicID + " " + index
                                                }
                                                {...player}
                                            />
                                        )
                                    )}
                                </Grid.Col>
                                <Grid.Col span="content">
                                    <Title align="center" mx="sm">
                                        VS
                                    </Title>
                                </Grid.Col>
                                <Grid.Col span="auto" pt={40}>
                                    {gameData.gameData.right.players.map(
                                        (player, index) => (
                                            <PlayerCard
                                                key={
                                                    player.relicID + " " + index
                                                }
                                                {...player}
                                            />
                                        )
                                    )}
                                </Grid.Col>
                            </Grid>
                        </>
                    ) : (
                        <Group position="center" mt={50}>
                            <Title>
                                <Loader mr="md" />
                                Waiting for a game
                            </Title>
                        </Group>
                    )}
                </>
            ) : (
                <Group position="center" mt={50}>
                    <Title>
                        <Loader mr="md" />
                        Waiting for logfile
                    </Title>
                </Group>
            )}
        </>
    )
}
