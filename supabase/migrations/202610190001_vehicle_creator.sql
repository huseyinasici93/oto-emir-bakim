-- Record the authenticated staff member who creates each vehicle.
-- Existing vehicle rows stay unchanged and appear as legacy records in the UI.
alter table public.vehicles
  add column if not exists created_by uuid references auth.users (id) on delete set null,
  add column if not exists created_by_label text;

create index if not exists vehicles_created_by_idx
  on public.vehicles (created_by);
