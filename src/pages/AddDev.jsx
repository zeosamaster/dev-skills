import React, { useState, useCallback } from 'react';

import { AddDevButton } from '../components/AddDevButton'
import { AddDevForm } from '../components/AddDevForm'

export function AddDev() {
  const [isAdding, setIsAdding] = useState(false);

  const onAddDevClick = useCallback(() => {
    setIsAdding(true);
  });

  const onDevDismiss = useCallback(() => {
    setIsAdding(false);
  });

  const onDevSubmit = useCallback(() => {
    onDevDismiss();
  });

  return isAdding ? (
    <AddDevForm onSubmit={onDevSubmit} onDismiss={onDevDismiss} />
  ) : (
    <AddDevButton onClick={onAddDevClick} />
  )
}