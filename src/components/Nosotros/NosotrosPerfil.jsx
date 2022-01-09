const NosotrosPerfil = ({ currentTeam}) => {

    const {first, last} =currentTeam.name

    return (
        <div>
            <h2>working progress</h2>
            <h2>{first} {last}</h2>
        </div>
    )
}

export default NosotrosPerfil