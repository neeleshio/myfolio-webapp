import React from 'react'
import { Warning, CheckCircle, NearbyError } from '@mui/icons-material';

export const WarningIcon = () => {
    return <Warning style={{ color: "#c9252d" }} />
}

export const CheckCircleIcon = () => {
    return <CheckCircle style={{ color: "#4FBE19" }} />
}

export const NearbyErrorIcon = () => {
    return <Warning style={{ color: "#F1C410" }} />
}