import styles from './timeline.module.css'
export default function Timeline({timeEvents}:{timeEvents:Array<any>}) {
    return (
        <div className={styles.timeline}>
            {timeEvents.map(({title,subTitle,desc},i)=>(
                <div className={ `${styles.container} ${i % 2 == 0 ? styles.left:styles.right}` } key={i}>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <p><b>{subTitle}</b></p>
                        <p>{desc}</p>
                    </div>
                </div>
            ))}
        </div> 
    )
}