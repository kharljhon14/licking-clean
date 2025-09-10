
create table providers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  bio text,
  rating int check (rating >= 1 and rating <= 5),
  created_at timestamptz default now()
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid references providers(id) on delete cascade,
  timestamp timestamptz default now()
);
