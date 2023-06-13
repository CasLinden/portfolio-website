function DeviceOutline ({project}) {
    
    if (project.hasMobileVersion) {
        return (
            <div className="smartphone-outline">
                <div className="project-image project-image-smartphone"></div>
            </div>
        )
    } else {
        return (
            <div className="monitor-outline">
                <div className="project-image project-image-monitor"></div>
            </div>
        )
    }
}

export default DeviceOutline