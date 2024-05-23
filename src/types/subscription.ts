type SubscriptionStatus =
  | "incomplete"
  | "incomplete_expired"
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "unpaid"
  | "paused"
  | "not_registered";

type SubscriptionStatusResponse = {
  status: SubscriptionStatus;
};

const subscriptionStatusText: Record<SubscriptionStatus, string> = {
  incomplete: "incompleto",
  incomplete_expired: "incompleto_expirado",
  trialing: "em teste",
  active: "ativo",
  past_due: "vencido",
  canceled: "cancelado",
  unpaid: "não pago",
  paused: "pausado",
  not_registered: "não registrado",
};
