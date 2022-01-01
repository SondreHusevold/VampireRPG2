export function ParseJsonText(str: string) {
    const data = str.split('\n');

    return (
        <div>
            {data.map((info) => {
                return <p>{info}</p>
            })}
        </div>
    )
}