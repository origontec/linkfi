import React from "react";
import {useAccount, useConnect} from "wagmi";

export function Status({
  isActivating,
  error,
  isActive,
}: {
  isActivating: ReturnType<typeof useAccount>["isConnecting"]
  error: ReturnType<typeof useConnect>["error"]
  isActive: ReturnType<typeof useAccount>["isConnected"]
}) {
  return (
    <div>
      {error ? (
        <>
          🔴 {error.name ?? 'Error'}
          {error.message ? `: ${error.message}` : null}
        </>
      ) : isActivating ? (
        <>🟡 Connecting</>
      ) : isActive ? (
        <>🟢 Connected</>
      ) : (
        <>⚪️ Disconnected</>
      )}
    </div>
  )
}
