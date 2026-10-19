-- Oto Emir Supabase database already contains these tables:
-- customers, vehicles, qr_access, maintenance_records, service_records, staff_members.
-- It also has get_vehicle_maintenance(uuid) and is_staff() functions.
-- This migration only adds staff-only RLS policies required for the web app.
-- It does not create, drop, or rewrite tables/data.

drop policy if exists "Staff can manage customers" on public.customers;
create policy "Staff can manage customers" on public.customers
  for all to authenticated using (public.is_staff()) with check (public.is_staff());

drop policy if exists "Staff can manage maintenance records" on public.maintenance_records;
create policy "Staff can manage maintenance records" on public.maintenance_records
  for all to authenticated using (public.is_staff()) with check (public.is_staff());

drop policy if exists "Staff can manage QR access" on public.qr_access;
create policy "Staff can manage QR access" on public.qr_access
  for all to authenticated using (public.is_staff()) with check (public.is_staff());
