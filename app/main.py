from fastapi import FastAPI
from app.cors.config import setup_cors
from app.routers import (
    countries,
    subjects,
    specializations,
    studylevels,
    enquireies
)

app = FastAPI(
    title="Universta Abroad Backend API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Setup CORS
setup_cors(app)

# Include all application routers
app.include_router(countries.router)
app.include_router(subjects.router)
app.include_router(specializations.router)
app.include_router(studylevels.router)
app.include_router(enquireies.router)

@app.get("/health", tags=["health"])
def health_check():
    return {"status": "ok", "service": "Universta Abroad API"}
