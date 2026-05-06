'use client';

import { useEffect, useState } from 'react';

export type NavItem = { id: string; label: string };

export function PageNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = items[0]?.id ?? '';
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= y) cur = item.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <nav className="page-nav" aria-label="Page sections">
      <div className="wrap">
        <div className="page-nav__inner">
          {items.map((t) => (
            <a key={t.id} href={'#' + t.id} className={active === t.id ? 'active' : ''}>
              {t.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function ProfileToc({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = items[0]?.id ?? '';
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= y) cur = item.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <aside className="toc">
      <h6 className="toc__label">On this page</h6>
      <ul className="toc__list">
        {items.map((t) => (
          <li key={t.id}>
            <a href={'#' + t.id} className={active === t.id ? 'active' : ''}>
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
