// src/App.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PortfolioTemplatePage from "./pages/PortfolioTemplatePage";
import PortfolioEditorPage from "./pages/PortfolioEditorPage";

const StartPage = lazy(() => import("./pages/StartPage"));
const BuilderStepPage = lazy(() => import("./pages/BuilderStepPage"));

function TopBar() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Doraemon Web Builder
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <a
            href="https://localhost:3000"
            onClick={(e) => e.preventDefault()}
            className="opacity-60 pointer-events-none"
            title="Backend chạy ở cổng 3000"
          >
            API: /build
          </a>
          <Link to="/" className="hover:underline">
            Trang chủ
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
        © 2025 Doraemon Web Builder
      </div>
    </footer>
  );
}

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <TopBar />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}

function Loading() {
  return (
    <div className="w-full py-20 text-center text-gray-600">
      Đang tải giao diện…
    </div>
  );
}

function NotFound() {
  return (
    <PageContainer>
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">404</h1>
        <p className="text-gray-600 mb-6">Trang không tồn tại.</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Về trang chủ
        </Link>
      </div>
    </PageContainer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <PageContainer>
                <StartPage />
              </PageContainer>
            }
          />
          <Route
            path="/builder/:type"
            element={
              <PageContainer>
                <BuilderStepPage />
              </PageContainer>
            }
          />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/builder/portfolio/templates" element={<PortfolioTemplatePage />} />
          <Route path="/builder/portfolio/editor/:templateId" element={<PortfolioEditorPage />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
